<?php

namespace Blog\CoreBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Class PostControllerTest
 * @package Blog\CoreBundle\Tests\Controller
 */
class PostControllerTest extends WebTestCase
{
    /**
     * Test posts index
     */
    public function testIndex()
    {
        $client = static::createClient();

        $crawler = $client->request('GET', '/');

        $this->assertTrue($client->getResponse()->isSuccessful(), 'The response was not successful');

        $this->assertCount(3, $crawler->filter('h2'), 'There should be 3 displayed posts');
    }

}
