<?php

namespace CarBundle\Service;

use CarBundle\Entity\Car;

class DataChecker
{
    public function checkCar(Car $car)
    {
        return "Car " . $car->getModel() . " checked";
    }
}
