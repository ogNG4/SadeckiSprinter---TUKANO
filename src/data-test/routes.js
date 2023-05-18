

const ROUTES = [
    {
        id: 'r1',
        title: 'Krynica - Muszyna',
        description: 'Trasa rowerowa z Krynicy do Muszyny',
        distance: '20',
        time: '1:30',
        difficulty: 'easy',
        type: 'bike',
        src:' https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d41336.75023111947!2d21.011733210963467!3d49.643993970051504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!4m5!1s0x473dc28303acf59b%3A0xc4490e282f69bd7c!2zR3J5YsOzdywgMzMtMzMw!3m2!1d49.62406!2d20.947889999999997!4m5!1s0x473dc6f1d0e7e7cf%3A0x8dc074aa732cb272!2sGorlice!3m2!1d49.654615899999996!2d21.1596321!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!5e0!3m2!1spl!2spl!4v1682795509291!5m2!1spl!2spl&zoom=200',
        img: 'https://images.unsplash.com/photo-1503242464786-199ffb1dd8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    },

    {
        id: 'r3',
        title: 'Bieg rzeźnika',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
        distance: '62.5',
        time: '4:23',
        difficulty: 'hard',
        type: 'running',
        src:' https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d41336.75023111947!2d21.011733210963467!3d49.643993970051504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!4m5!1s0x473dc28303acf59b%3A0xc4490e282f69bd7c!2zR3J5YsOzdywgMzMtMzMw!3m2!1d49.62406!2d20.947889999999997!4m5!1s0x473dc6f1d0e7e7cf%3A0x8dc074aa732cb272!2sGorlice!3m2!1d49.654615899999996!2d21.1596321!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!5e0!3m2!1spl!2spl!4v1682795509291!5m2!1spl!2spl&zoom=200',
        img: 'https://images.unsplash.com/photo-1503242464786-199ffb1dd8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'

    },
    {
        id: 'r4',
        title: 'Spacer po Pieninach',
        description: 'Przyjemny spacer w malowniczych Pieninach',
        distance: '10',
        time: '1:00',
        difficulty: 'easy',
        type: 'hiking',
        src:' https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d41336.75023111947!2d21.011733210963467!3d49.643993970051504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!4m5!1s0x473dc28303acf59b%3A0xc4490e282f69bd7c!2zR3J5YsOzdywgMzMtMzMw!3m2!1d49.62406!2d20.947889999999997!4m5!1s0x473dc6f1d0e7e7cf%3A0x8dc074aa732cb272!2sGorlice!3m2!1d49.654615899999996!2d21.1596321!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!5e0!3m2!1spl!2spl!4v1682795509291!5m2!1spl!2spl&zoom=200',
        img: 'https://images.unsplash.com/photo-1503242464786-199ffb1dd8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'

    },
    {
        id: 'r5',
        title: 'Rowerowa przygoda w Beskidach',
        description: 'Wycieczka rowerowa po Beskidach dla średniozaawansowanych',
        distance: '35',
        time: '3:30',
        difficulty: 'medium',
        type: 'bike',
        src:' https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d41336.75023111947!2d21.011733210963467!3d49.643993970051504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!4m5!1s0x473dc28303acf59b%3A0xc4490e282f69bd7c!2zR3J5YsOzdywgMzMtMzMw!3m2!1d49.62406!2d20.947889999999997!4m5!1s0x473dc6f1d0e7e7cf%3A0x8dc074aa732cb272!2sGorlice!3m2!1d49.654615899999996!2d21.1596321!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!5e0!3m2!1spl!2spl!4v1682795509291!5m2!1spl!2spl&zoom=200',
        img: 'https://images.unsplash.com/photo-1503242464786-199ffb1dd8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'

    },
    {
        id: 'r6',
        title: 'Maraton Górski',
        description: 'Maraton biegowy po górskich ścieżkach',
        distance: '42.1',
        time: '6:15',
        difficulty: 'hard',
        type: 'running',
        src:' https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d41336.75023111947!2d21.011733210963467!3d49.643993970051504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!4m5!1s0x473dc28303acf59b%3A0xc4490e282f69bd7c!2zR3J5YsOzdywgMzMtMzMw!3m2!1d49.62406!2d20.947889999999997!4m5!1s0x473dc6f1d0e7e7cf%3A0x8dc074aa732cb272!2sGorlice!3m2!1d49.654615899999996!2d21.1596321!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!5e0!3m2!1spl!2spl!4v1682795509291!5m2!1spl!2spl&zoom=200',
        img: 'https://images.unsplash.com/photo-1503242464786-199ffb1dd8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'

    },
    {
        id: 'r7',
        title: 'Szlak nad Jeziorem Rożnowskim',
        description: 'Piesza wędrówka nad malowniczym Jeziorem Rożnowskim',
        distance: '15',
        time: '2:30',
        difficulty: 'medium',
        type: 'hiking',
        src:' https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d41336.75023111947!2d21.011733210963467!3d49.643993970051504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!4m5!1s0x473dc28303acf59b%3A0xc4490e282f69bd7c!2zR3J5YsOzdywgMzMtMzMw!3m2!1d49.62406!2d20.947889999999997!4m5!1s0x473dc6f1d0e7e7cf%3A0x8dc074aa732cb272!2sGorlice!3m2!1d49.654615899999996!2d21.1596321!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!5e0!3m2!1spl!2spl!4v1682795509291!5m2!1spl!2spl&zoom=200',
        img: 'https://images.unsplash.com/photo-1503242464786-199ffb1dd8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'

    },
    {
        id: 'r8',
        title: 'Trasa rowerowa przez Pogórze',
        description: 'Przejażdżka rowerowa przez urokliwe tereny Pogórza',
        distance: '25',
        time: '2:15',
        difficulty: 'medium',
        type: 'bike',
        src:' https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d41336.75023111947!2d21.011733210963467!3d49.643993970051504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!4m5!1s0x473dc28303acf59b%3A0xc4490e282f69bd7c!2zR3J5YsOzdywgMzMtMzMw!3m2!1d49.62406!2d20.947889999999997!4m5!1s0x473dc6f1d0e7e7cf%3A0x8dc074aa732cb272!2sGorlice!3m2!1d49.654615899999996!2d21.1596321!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!5e0!3m2!1spl!2spl!4v1682795509291!5m2!1spl!2spl&zoom=200',
        img: 'https://images.unsplash.com/photo-1503242464786-199ffb1dd8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'

    },
    {
        id: 'r9',
        title: 'Bieg po malowniczej dolinie',
        description: 'Bieg w pięknej dolinie z przepięknymi widokami',
        distance: '15',
        time: '1:45',
        difficulty: 'easy',
        type: 'running',
        src:' https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d41336.75023111947!2d21.011733210963467!3d49.643993970051504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!4m5!1s0x473dc28303acf59b%3A0xc4490e282f69bd7c!2zR3J5YsOzdywgMzMtMzMw!3m2!1d49.62406!2d20.947889999999997!4m5!1s0x473dc6f1d0e7e7cf%3A0x8dc074aa732cb272!2sGorlice!3m2!1d49.654615899999996!2d21.1596321!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!5e0!3m2!1spl!2spl!4v1682795509291!5m2!1spl!2spl&zoom=200',
        img: 'https://images.unsplash.com/photo-1503242464786-199ffb1dd8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'

    },
    {
        id: 'r10',
        title: 'Wędrówka po Gorcach',
        description: 'Wycieczka piesza po Górach Gorczańskich dla zaawansowanych',
        distance: '30',
        time: '5:00',
        difficulty: 'hard',
        type: 'hiking',
        src:' https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d41336.75023111947!2d21.011733210963467!3d49.643993970051504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e0!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!4m5!1s0x473dc28303acf59b%3A0xc4490e282f69bd7c!2zR3J5YsOzdywgMzMtMzMw!3m2!1d49.62406!2d20.947889999999997!4m5!1s0x473dc6f1d0e7e7cf%3A0x8dc074aa732cb272!2sGorlice!3m2!1d49.654615899999996!2d21.1596321!4m5!1s0x473dc1ebb577466f%3A0xd6f9957b2a77aca7!2sSzalowa!3m2!1d49.6827391!2d21.0231274!5e0!3m2!1spl!2spl!4v1682795509291!5m2!1spl!2spl&zoom=200',
        img: 'https://images.unsplash.com/photo-1503242464786-199ffb1dd8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'

    }
];


export default ROUTES;