<?php

namespace CarBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/our-cars", name="offer")
     */
    public function indexAction()
    {
        $carRepository = $this->getDoctrine()->getRepository('CarBundle:Car');
        $cars = $carRepository->findAll();

        return $this->render('CarBundle:Default:index.html.twig', ['cars' => $cars]);
    }

    /**
     * @param $id
     * @Route("/car/{id}", name="show_car")
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function showAction($id)
    {
        $carRepository = $this->getDoctrine()->getRepository('CarBundle:Car');
        $car = $carRepository->find($id);

        return $this->render('CarBundle:Default:show.html.twig', ['car' => $car]);
    }
}
