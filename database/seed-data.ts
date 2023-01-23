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
            description: 'Pendiente: Bienvenido.',
            status: 'pendiente',
            createdAt: Date.now()
        },
        {
            description: 'En Progreso: A este proyecto.',
            status: 'en-progreso',
            createdAt: Date.now()
        },
        {
            description: 'Completado: Con NextJs y MongoDB.',
            status: 'completado',
            createdAt: Date.now()
        },
    ]
}