<?php

namespace Tests\Unit;

use App\Reply;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ReplyTest extends TestCase
{
    use DatabaseMigrations;
    
    /** @test */
    function it_has_an_owner()
    {
        $reply = create(Reply::class);

        $this->assertInstanceOf(\App\User::class, $reply->owner);
    }
}
