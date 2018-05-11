<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class BlogController
 *
 * @package App\Controller
 * @Route("/blog")
 */
class BlogController extends AbstractController
{
    /**
     * @var \Twig_Environment
     */
    private $twig;
    /**
     * @var \Symfony\Component\HttpFoundation\Session\SessionInterface
     */
    private $session;

    /**
     * BlogController constructor.
     *
     * @param \Twig_Environment                                          $twig
     * @param \Symfony\Component\HttpFoundation\Session\SessionInterface $session
     */
    public function __construct(\Twig_Environment $twig, SessionInterface $session)
    {
        $this->twig = $twig;
        $this->session = $session;
    }

    /**
     * @Route("/{name}", name="blog_index")
     */
    public function index($name)
    {
        $html = $this->twig->render(
            'blog/index.html.twig',
            [
                'posts' => $this->session->get('posts')
            ]
        );

        return new Response($html);
    }

    /**
     * @Route("/add", name="blog_add")
     */
    public function add()
    {
        $posts = $this->session->get('posts');
        $posts[uniqid()] = [
            'title' => 'A random title ' . rand(1, 500),
            'text' => 'Some random text nr ' . rand(1, 500),
        ];
        $this->session->set('posts', $posts);
    }

    /**
     * @Route("/show/{id}", name="blog_show")
     */
    public function show($id)
    {
        $posts = $this->session->get('posts');

        if (! $posts || ! isset($posts[$id])) {
            throw new NotFoundHttpException('Post not found');
        }

        $html = $this->twig->render(
            'blog/post.html.twig',
            [
                'id' => $id,
                'post' => $posts[$id]
            ]
        );

        return Response($html);
    }
}