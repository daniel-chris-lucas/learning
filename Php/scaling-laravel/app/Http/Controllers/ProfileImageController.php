<?php

namespace App\Http\Controllers;

use App\ProfileImage;
use App\Http\Responses\S3FileStream;

use Illuminate\Http\Request;

class ProfileImageController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'profile' => 'required|image'
        ]);

        $path = $request->file('profile')->store('profile', 's3');

        $image = ProfileImage::updateOrCreate([
            'user_id' => auth()->user()->id
        ], [
            'user_id' => auth()->user()->id,
            'path' => $path
        ]);

        return $image;
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return void
     */
    public function show($id)
    {
        $image = ProfileImage::where('user_id', auth()->user()->id)
            ->findOrFail($id);

        // download image from s3 and send to user's browser
        return (new S3FileStream($image))->output();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
