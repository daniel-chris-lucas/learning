<?php

namespace Blog\CoreBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class PostController extends Controller
{
    /**
     * @Route("/")
     */
    public function indexAction()
    {
        $posts = $this->getDoctrine()->getRepository('ModelBundle:Post')->findAll();

        return $this->render('CoreBundle:Post:index.html.twig', array(
            'posts' => $posts
        ));
    }

}
