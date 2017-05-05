<?php

use App\Concert;
use App\Order;
use App\Ticket;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\WithoutMiddleware;

class ExampleTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    function user_can_view_their_order_confirmation()
    {
        $this->disableExceptionHandling();
        
        // Create a concert
        $concert = factory(Concert::class)->create();
        // Create an order
        $order = factory(Order::class)->create([
            'confirmation_number' => 'ORDERCONFIRMATION1234'
        ]);
        // Create a ticket
        $ticket = factory(Ticket::class)->create([
            'concert_id' => $concert->id,
            'order_id' => $order->id,
        ]);
        
        // Visit the order confirmation page
        $response = $this->get("/orders/ORDERCONFIRMATION1234");

        $response->assertStatus(200);
        
        // Assert we see the correct order details
    }
}
