<?php

namespace App\Entity;

use App\Repository\MessageRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MessageRepository::class)]
class Message
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $discussion = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDiscussion(): ?string
    {
        return $this->discussion;
    }

    public function setDiscussion(string $discussion): self
    {
        $this->discussion = $discussion;

        return $this;
    }
}