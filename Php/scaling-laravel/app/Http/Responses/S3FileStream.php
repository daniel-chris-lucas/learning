<?php

namespace App\Http\Responses;

use App\ProfileImage;
use Illuminate\Support\Facades\Storage;

class S3FileStream
{
    /**
     * @var \App\ProfileImage
     */
    private $image;
    /**
     * @var string
     */
    private $disk;
    /**
     * @var string
     */
    private $adapter;
    /**
     * @var S3Client
     */
    private $client;

    /**
     * S3FileStream constructor.
     *
     * @param \App\ProfileImage $image
     * @param string            $disk
     */
    public function __construct(ProfileImage $image, $disk = 's3')
    {
        $this->image = $image;
        $this->disk = $disk;

        $this->adapter = Storage::disk($disk)->getAdapter();
        $this->client = $this->adapter->getClient();
    }

    public function output()
    {
        // outputs to the browser
        return $this->headers()
            ->stream();
    }

    protected function headers()
    {
        // Content-Type
        $object = $this->client->headObject([
            'Bucket' => $this->adapter->getBucket(),
            'Key'    => $this->image->path,
        ]);

        $headers = [
            'Last-Modified'       => $object['Last-Modified'],
            // 'Etag' => $object['ETag'], # We are not currently implementing validation caching
            'Accept-Ranges'       => $object['AcceptRanges'],
            'Content-Length'      => $object['ContentLength'],
            'Content-Type'        => $object['ContentType'],
            'Content-Disposition' => 'attachment; filename=' . basename($this->image->path),
        ];

        foreach ($headers as $header => $value) {
            header("$header: $value");
        }

        return $this;
    }

    protected function stream()
    {
        $this->client->registerStreamWrapper();

        // Open a stream in read-only mode
        if (! ($stream = fopen("s3://{$this->adapter->getBucket()}/{$this->image->path}", 'r'))) {
            throw new \Exception('Could not open stream for reading file [' . $this->image->path . ']');
        }

        // Check if the stream has more data to read
        while (! feof($stream)) {
            // Read 1024 bytes from the stream
            echo fread($stream, 1024);
        }

        // Be sure to close the stream resource when you're done with it
        fclose($stream);
    }
}
