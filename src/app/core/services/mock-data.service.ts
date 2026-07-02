import { Injectable } from '@angular/core';

export interface MockAnnonce {
  id: number;
  titre: string;
  description: string;
  categorie: string;
  image: string;
  utilisateur: { nom: string; prenom: string };
  dateCreation: string;
}

export interface MockDemande {
  id: number;
  titre: string;
  description: string;
  categorie: string;
  utilisateur: { nom: string; prenom: string };
  dateCreation: string;
}

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  private mockAnnonces: MockAnnonce[] = [
    {
      id: 1,
      titre: 'Bicycle in good condition',
      description: 'Mountain bike, 21 gears, barely used. Looking for someone who will take care of it.',
      categorie: 'Sports',
      image: '🚴',
      utilisateur: { nom: 'Ben', prenom: 'Ahmed' },
      dateCreation: '2024-06-28'
    },
    {
      id: 2,
      titre: 'Books - Science Fiction Collection',
      description: 'Lot of 15 science fiction books by famous authors. Perfect for a book lover.',
      categorie: 'Books',
      image: '📚',
      utilisateur: { nom: 'Khedija', prenom: 'Fatima' },
      dateCreation: '2024-06-27'
    },
    {
      id: 3,
      titre: 'Kitchen Blender',
      description: 'Philips blender, works perfectly. Includes 3 speed settings.',
      categorie: 'Electronics',
      image: '🔧',
      utilisateur: { nom: 'Salim', prenom: 'Mohamed' },
      dateCreation: '2024-06-26'
    },
    {
      id: 4,
      titre: 'Wooden Dining Table',
      description: 'Beautiful oak dining table for 6 people. Minor scratches but very sturdy.',
      categorie: 'Furniture',
      image: '🪑',
      utilisateur: { nom: 'Amira', prenom: 'Yasmin' },
      dateCreation: '2024-06-25'
    },
    {
      id: 5,
      titre: 'Yoga Mat and Accessories',
      description: 'Premium yoga mat with carrying strap and 2 yoga blocks. Barely used.',
      categorie: 'Sports',
      image: '🧘',
      utilisateur: { nom: 'Omar', prenom: 'Hassan' },
      dateCreation: '2024-06-24'
    }
  ];

  private mockDemandes: MockDemande[] = [
    {
      id: 1,
      titre: 'Looking for a bicycle',
      description: 'Need a bicycle in working condition for daily commute. Budget friendly preferred.',
      categorie: 'Sports',
      utilisateur: { nom: 'Zahra', prenom: 'Nadia' },
      dateCreation: '2024-06-28'
    },
    {
      id: 2,
      titre: 'Seeking used laptop',
      description: 'Looking for a laptop (Windows or Mac) for work. Must have good battery life.',
      categorie: 'Electronics',
      utilisateur: { nom: 'Khalid', prenom: 'Ibrahim' },
      dateCreation: '2024-06-27'
    },
    {
      id: 3,
      titre: 'Need children clothing',
      description: 'Looking for children clothing, sizes 5-7 years old. Any condition acceptable.',
      categorie: 'Clothing',
      utilisateur: { nom: 'Leila', prenom: 'Samira' },
      dateCreation: '2024-06-26'
    }
  ];

  getAnnonces(): MockAnnonce[] {
    return this.mockAnnonces;
  }

  getDemandes(): MockDemande[] {
    return this.mockDemandes;
  }

  getAnnonceById(id: number): MockAnnonce | undefined {
    return this.mockAnnonces.find(a => a.id === id);
  }

  getDemandeById(id: number): MockDemande | undefined {
    return this.mockDemandes.find(d => d.id === id);
  }

  addAnnonce(annonce: Omit<MockAnnonce, 'id' | 'dateCreation'>): MockAnnonce {
    const newAnnonce: MockAnnonce = {
      ...annonce,
      id: Math.max(...this.mockAnnonces.map(a => a.id), 0) + 1,
      dateCreation: new Date().toISOString().split('T')[0]
    };
    this.mockAnnonces.unshift(newAnnonce);
    return newAnnonce;
  }
}
