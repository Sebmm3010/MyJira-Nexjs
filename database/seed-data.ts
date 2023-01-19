interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}

export const seedData:SeedData = {
    entries: [
        {
            description: 'Pendiente: Ullamco excepteur cupidatat sint duis proident aliqua aliqua.',
            status: 'pendiente',
            createdAt: Date.now()
        },
        {
            description: 'En Progreso: Exercitation aliquip incididunt amet mollit enim ad commodo deserunt ea consectetur.',
            status: 'en-progreso',
            createdAt: Date.now()
        },
        {
            description: 'Completado: Aute adipisicing culpa ullamco culpa excepteur duis sit non.',
            status: 'completado',
            createdAt: Date.now()
        },
    ]
}