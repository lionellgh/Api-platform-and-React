<?php

namespace App\Entity;


use ApiPlatform\Metadata\ApiResource;
use App\Repository\GiftRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Post;
use Symfony\Component\Serializer\Annotation\Groups;
use App\State\GiftProcessor;

//header('Access-Control-Allow-Origin: http://127.0.0.1:8000/api');
//header('type TotalCountHeader = Header "X-Total-Count" Int');
//header ('type WebApi = "gifts" :> Get [ JSON] (ListHeaders [Gift])');




#[ApiResource(
normalizationContext: ['groups' => ['read']],
    denormalizationContext: ['groups' => ['write']],
)]
#[ORM\Entity(repositoryClass: GiftRepository::class)]
class Gift
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['read', 'write'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read', 'write'])]
    private ?string $name = null;

    #[ORM\Column(type: Types::TEXT)]
    #[Groups(['read', 'write'])]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read', 'write'])]
    private ?string $owner = null;

    #[ORM\Column(length: 255)]
    #[Groups(['read', 'write'])]
    private ?string $url = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 10, scale: 2)]
    #[Groups(['read', 'write'])]
    private ?string $price = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['read', 'write'])]
    private ?string $givenby = null;

    #[ORM\Column]
    #[Groups(['read', 'write'])]
    private ?int $year = null;

    #[ORM\ManyToOne(inversedBy: 'gifts')]
    private ?User $ownerUser = null;

    #[ORM\ManyToOne(inversedBy: 'giftGiven')]
    private ?User $givenByUser = null;



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getOwner(): ?string
    {
        return $this->owner;
    }

    public function setOwner(string $owner): self
    {
        $this->owner = $owner;

        return $this;
    }



    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(string $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getGivenby(): ?string
    {
        return $this->givenby;
    }

    public function setGivenby(?string $givenby): self
    {
        $this->givenby = $givenby;

        return $this;
    }

    public function getYear(): ?int
    {
        return $this->year;
    }

    public function setYear(int $year): self
    {
        $this->year = $year;

        return $this;
    }

    public function getOwnerUser(): ?user
    {
        return $this->ownerUser;
    }

    public function setOwnerUser(?user $ownerUser): self
    {
        $this->ownerUser = $ownerUser;

        return $this;
    }

    public function getGivenByUser(): ?user
    {
        return $this->givenByUser;
    }

    public function setGivenByUser(?user $givenByUser): self
    {
        $this->givenByUser = $givenByUser;

        return $this;
    }


}
