<?php

namespace CarBundle\Service;

use CarBundle\Entity\Car;

class DataChecker
{
    /**
     * @var boolean
     */
    protected $requireImagesToPromoteCar;

    /**
     * DataChecker constructor.
     *
     * @param bool $requireImagesToPromoteCar
     */
    public function __construct($requireImagesToPromoteCar)
    {
        $this->requireImagesToPromoteCar = $requireImagesToPromoteCar;
    }

    public function checkCar(Car $car)
    {
        if ($this->requireImagesToPromoteCar) {
            return false;
        }

        return true;
    }
}
