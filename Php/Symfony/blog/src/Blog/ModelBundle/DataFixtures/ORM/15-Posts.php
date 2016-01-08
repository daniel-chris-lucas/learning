<?php

namespace Blog\ModelBundle\DataFixtures\ORM;

use Blog\ModelBundle\Entity\Author;
use Blog\ModelBundle\Entity\Post;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

/**
 * Fixtures for the Post Entity
 */
class Posts extends AbstractFixture implements OrderedFixtureInterface
{

    /**
     * {@inheritdoc}
     */
    public function load(ObjectManager $manager)
    {
        $p1 = new Post();
        $p1->setTitle('Lorem ipsum dolor sit amet');
        $p1->setBody('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit fermentum sem, non
        dignissim ipsum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Praesent in turpis sed enim tempus pretium. Cras congue commodo sem in consectetur. Aliquam odio nibh,
        vehicula venenatis feugiat ut, condimentum at risus. Etiam vitae suscipit nunc. Donec ultrices, purus
        id commodo suscipit, nisl nibh convallis dolor, molestie lacinia tortor justo nec felis. Maecenas et
        tempus mi. Phasellus tellus metus, tempor ut felis in, eleifend viverra ante. Quisque id mattis turpis.
        Nulla finibus magna sed diam sollicitudin, ac egestas augue sollicitudin. Donec eu accumsan tellus, eget
        iaculis sapien.

        Mauris id magna at massa facilisis volutpat vel in risus. Suspendisse efficitur imperdiet eros, malesuada
        volutpat lectus ultricies nec. Curabitur erat mi, euismod ut neque at, pretium gravida dolor. Quisque magna
        mi, porttitor et elit non, porttitor laoreet massa. Duis sed bibendum sapien. Suspendisse id aliquet nunc.');
        $p1->setAuthor($this->getAuthor($manager, 'David'));

        $p2 = new Post();
        $p2->setTitle('Vivamus eget libero nec magna semper');
        $p2->setBody('Duis vitae mauris at quam sodales dictum et quis est. Quisque volutpat ut lectus vitae eleifend.
        Vestibulum scelerisque, sapien a pretium tempor, nisl felis commodo mauris, in rhoncus massa urna et dolor.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer pretium eleifend
        suscipit. Nunc sollicitudin, mi at aliquet pulvinar, ante odio fermentum neque, efficitur pellentesque augue
        lorem mollis dolor. Pellentesque blandit mi nec aliquet eleifend. Nunc non fermentum odio.

        Proin fringilla eu odio ut dignissim. Suspendisse posuere convallis tortor, et aliquet quam rhoncus in. Sed
        condimentum augue nunc, a blandit ex dignissim in. In at odio imperdiet, lacinia nunc sit amet, semper justo.
        Pellentesque in risus non leo facilisis consectetur. Phasellus non commodo tortor, non gravida nisl. Vivamus
        faucibus dolor at tempor tristique. Aenean vitae felis ut lectus cursus vehicula. Vivamus ultricies egestas sem
        ac tincidunt. Nunc ac sapien in metus tempus ullamcorper. Aliquam consequat tellus id ex pretium, in lacinia
        diam feugiat.');
        $p2->setAuthor($this->getAuthor($manager, 'Eddie'));

        $p3 = new Post();
        $p3->setTitle('Suspendisse at hendrerit dolor');
        $p3->setBody('Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam semper purus sem, ac congue
        sapien vulputate vitae. Aliquam cursus risus fringilla sem cursus gravida. Etiam dictum a eros a sollicitudin.
        Sed viverra sollicitudin dolor et gravida. Integer et turpis quis libero facilisis pharetra. Duis hendrerit
        faucibus orci, et aliquet metus placerat a. Phasellus tristique a quam quis faucibus. Mauris mattis orci in enim
        vestibulum, sed commodo sapien condimentum. Cras sed molestie ligula. Aliquam vitae turpis a nisl pulvinar
        sollicitudin. Nullam iaculis fringilla urna eu faucibus. Fusce venenatis sit amet turpis a finibus. Nulla
        suscipit, lectus et faucibus mattis, quam justo tempor nulla, sed vestibulum tellus risus dignissim nisi. Proin
        fringilla, tortor vel blandit euismod, lorem enim tincidunt orci, accumsan vehicula justo nunc eu orci.

        Praesent non lectus sed enim dignissim fringilla. Phasellus ut sagittis lorem. Duis fringilla, nibh vitae
        egestas consectetur, ligula sem fermentum libero, in imperdiet sapien nunc sit amet eros. Praesent dictum nisi
        justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc
        vestibulum libero ligula, egestas consequat erat ultrices vel. Ut mattis leo ex, et facilisis tellus rhoncus
        quis. Praesent ultricies eget libero vitae accumsan.');
        $p3->setAuthor($this->getAuthor($manager, 'Eddie'));

        $manager->persist($p1);
        $manager->persist($p2);
        $manager->persist($p3);

        $manager->flush();
    }

    /**
     * Get an author
     *
     * @param ObjectManager $manager
     * @param string        $name
     *
     * @return Author
     */
    private function getAuthor(ObjectManager $manager, $name)
    {
        return $manager->getRepository('ModelBundle:Author')->findOneBy([
            'name' => $name
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function getOrder()
    {
        return 15;
    }
}