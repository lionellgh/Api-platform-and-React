<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use ApiPlatform\Metadata\ApiResource;


#[ApiResource]
#[ORM\Entity(repositoryClass: UserRepository::class)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $username = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;

    #[ORM\OneToMany(mappedBy: 'ownerUser', targetEntity: Gift::class)]
    private Collection $gifts;

    #[ORM\OneToMany(mappedBy: 'givenByUser', targetEntity: Gift::class)]
    private Collection $giftGiven;

    public function __construct()
    {
        $this->gifts = new ArrayCollection();
        $this->giftGiven = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->username;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * @return Collection<int, Gift>
     */
    public function getGifts(): Collection
    {
        return $this->gifts;
    }

    public function addGift(Gift $gift): self
    {
        if (!$this->gifts->contains($gift)) {
            $this->gifts->add($gift);
            $gift->setOwnerUser($this);
        }

        return $this;
    }

    public function removeGift(Gift $gift): self
    {
        if ($this->gifts->removeElement($gift)) {
            // set the owning side to null (unless already changed)
            if ($gift->getOwnerUser() === $this) {
                $gift->setOwnerUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Gift>
     */
    public function getGiftGiven(): Collection
    {
        return $this->giftGiven;
    }

    public function addGiftGiven(Gift $giftGiven): self
    {
        if (!$this->giftGiven->contains($giftGiven)) {
            $this->giftGiven->add($giftGiven);
            $giftGiven->setGivenByUser($this);
        }

        return $this;
    }

    public function removeGiftGiven(Gift $giftGiven): self
    {
        if ($this->giftGiven->removeElement($giftGiven)) {
            // set the owning side to null (unless already changed)
            if ($giftGiven->getGivenByUser() === $this) {
                $giftGiven->setGivenByUser(null);
            }
        }

        return $this;
    }
}
