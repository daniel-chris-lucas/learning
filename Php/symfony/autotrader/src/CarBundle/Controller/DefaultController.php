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
        $cars = [
            ['make' => 'BMW', 'name' => 'X1'],
            ['make' => 'Fiat', 'name' => 'Croma'],
            ['make' => 'Audi', 'name' => 'Q7'],
        ];

        return $this->render('CarBundle:Default:index.html.twig', ['cars' => $cars]);
    }
}
