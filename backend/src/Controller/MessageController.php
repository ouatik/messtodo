<?php

namespace App\Controller;

use App\Entity\Message;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MessageController extends AbstractController
{
    #[Route('/api/create-message', name: 'app_message')]
    public function new(Request $request,EntityManagerInterface $entityManager): Response
    {
        $data = json_decode($request->getContent(), true);

        $message = new Message();
        $message->setDiscussion($data['message']);

       
        $entityManager->persist($message);
        $entityManager->flush();

        return new Response('Message created');
    }
}
