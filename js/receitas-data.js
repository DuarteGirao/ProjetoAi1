const receitasDB = {
    'CaldoVerde': {
        nome: 'Caldo Verde',
        imagem: 'img/caldoVerde.jpg',
        descricao: 'Sopa tradicional portuguesa com couve galega, batata e chouriço. Reconfortante e saborosa.',
        tempo: '35 min',
        dificuldade: 'Fácil',
        porcoes: '6 pessoas',
        categoria: 'Sopa',
        ingredientes: [
            '500g de batatas',
            '200g de couve galega cortada em juliana fina',
            '150g de chouriço',
            '1 cebola média',
            '2 dentes de alho',
            '1,5L de água',
            '4 colheres de sopa de azeite',
            'Sal a gosto'
        ],
        passos: [
            'Descasque e corte as batatas em pedaços. Pique a cebola e o alho.',
            'Numa panela, refogue a cebola e o alho no azeite até ficarem transparentes.',
            'Adicione as batatas, a água e o sal. Deixe cozinhar durante 20 minutos.',
            'Triture as batatas com uma varinha mágica até obter um creme.',
            'Adicione a couve cortada em juliana e deixe cozinhar 5 minutos.',
            'Corte o chouriço em rodelas e adicione à sopa.',
            'Sirva bem quente com um fio de azeite por cima e pão de broa.'
        ]
    },
    'SopaLegumes': {
        nome: 'Sopa de Legumes',
        imagem: 'img/sopaLegumes.jpg',
        descricao: 'Sopa nutritiva e colorida com uma variedade de legumes frescos. Perfeita para qualquer época do ano.',
        tempo: '40 min',
        dificuldade: 'Fácil',
        porcoes: '6 pessoas',
        categoria: 'Sopa',
        ingredientes: [
            '2 cenouras',
            '2 batatas médias',
            '1 cebola',
            '1 alho francês',
            '1 nabo',
            '100g de feijão verde',
            '1 tomate maduro',
            '1,5L de água ou caldo de legumes',
            '3 colheres de sopa de azeite',
            'Sal e pimenta a gosto'
        ],
        passos: [
            'Lave e descasque todos os legumes. Corte em pedaços pequenos.',
            'Numa panela grande, refogue a cebola no azeite até ficar dourada.',
            'Adicione todos os legumes e refogue por 5 minutos.',
            'Cubra com a água ou caldo e tempere com sal e pimenta.',
            'Deixe cozinhar em lume médio durante 30 minutos.',
            'Triture parte da sopa se preferir uma textura mais cremosa.',
            'Sirva quente com um fio de azeite e coentros frescos.'
        ]
    },
    'BifeGrelhadoBatatas': {
        nome: 'Bife Grelhado com Batatas',
        imagem: 'img/bifeBatatas.jpg',
        descricao: 'Bife suculento grelhado acompanhado de batatas fritas crocantes. Um clássico português.',
        tempo: '30 min',
        dificuldade: 'Fácil',
        porcoes: '4 pessoas',
        categoria: 'Carne',
        ingredientes: [
            '4 bifes de vaca (lombo ou alcatra)',
            '4 batatas grandes',
            '3 dentes de alho',
            'Manteiga',
            'Azeite para fritar',
            'Sal grosso',
            'Pimenta preta',
            'Folhas de louro'
        ],
        passos: [
            'Tempere os bifes com sal grosso, pimenta e alho esmagado. Deixe marinar 15 minutos.',
            'Descasque as batatas e corte em palitos. Seque bem com papel absorvente.',
            'Aqueça azeite abundante numa frigideira e frite as batatas até ficarem douradas. Reserve.',
            'Numa frigideira bem quente, grelhe os bifes 3-4 minutos de cada lado (ou ao seu gosto).',
            'Adicione uma noz de manteiga e alho no final para mais sabor.',
            'Sirva os bifes com as batatas fritas e salada a gosto.'
        ]
    },
    'FrangoAssado': {
        nome: 'Frango Assado no Forno',
        imagem: 'img/frango.jpg',
        descricao: 'Frango inteiro assado com batatas, alho e ervas aromáticas. Perfeito para refeições em família.',
        tempo: '90 min',
        dificuldade: 'Média',
        porcoes: '6 pessoas',
        categoria: 'Carne',
        ingredientes: [
            '1 frango inteiro (cerca de 1,5kg)',
            '1kg de batatas',
            '1 cabeça de alho',
            '1 limão',
            '4 colheres de sopa de azeite',
            '2 colheres de chá de colorau',
            'Tomilho e alecrim frescos',
            'Sal e pimenta a gosto',
            '200ml de vinho branco'
        ],
        passos: [
            'Pré-aqueça o forno a 200°C.',
            'Tempere o frango por dentro e por fora com sal, pimenta, colorau e sumo de limão.',
            'Coloque o frango num tabuleiro. Disponha as batatas cortadas em quartos à volta.',
            'Adicione dentes de alho inteiros, ervas aromáticas e regue tudo com azeite.',
            'Deite o vinho branco no tabuleiro e cubra com papel de alumínio.',
            'Leve ao forno por 60 minutos. Retire o papel e deixe dourar mais 20-30 minutos.',
            'Regue o frango com os sucos durante o cozimento. Sirva bem quente.'
        ]
    },
    'SalmaoGrelhado': {
        nome: 'Salmão Grelhado',
        imagem: 'img/recipe3.jpg',
        descricao: 'Filetes de salmão temperados com limão e ervas, grelhados até ficarem suculentos. Esta receita simples realça o sabor natural do peixe fresco.',
        tempo: '30 min',
        dificuldade: 'Fácil',
        porcoes: '4 pessoas',
        categoria: 'Peixe',
        ingredientes: [
            '4 filetes de salmão (cerca de 150g cada)',
            '2 limões (sumo e raspa)',
            '3 colheres de sopa de azeite',
            '2 dentes de alho picados',
            '1 colher de sopa de ervas frescas (endro, salsa ou tomilho)',
            'Sal e pimenta preta a gosto',
            'Rodelas de limão para decorar'
        ],
        passos: [
            'Numa tigela, misture o sumo de limão, raspa, azeite, alho picado, ervas frescas, sal e pimenta.',
            'Coloque os filetes de salmão numa travessa e regue com a marinada. Deixe marinar durante 15-20 minutos.',
            'Pré-aqueça o grelhador ou frigideira antiaderente em lume médio-alto.',
            'Grelhe os filetes de salmão durante 4-5 minutos de cada lado, ou até ficarem dourados e cozinhados no interior.',
            'Sirva imediatamente com rodelas de limão e acompanhe com legumes salteados ou arroz.'
        ]
    },
    'BoloDeChocolate': {
        nome: 'Bolo de Chocolate',
        imagem: 'img/recipe1.jpg',
        descricao: 'Bolo fofo de cacau com cobertura cremosa, perfeito para festas ou um lanche reconfortante. Uma receita clássica que nunca falha.',
        tempo: '45 min',
        dificuldade: 'Média',
        porcoes: '8-10 fatias',
        categoria: 'Sobremesas',
        ingredientes: [
            '200g de farinha',
            '200g de açúcar',
            '50g de cacau em pó',
            '1 colher de chá de fermento',
            '1 colher de chá de bicarbonato de sódio',
            'Uma pitada de sal',
            '2 ovos',
            '240ml de leite',
            '120ml de óleo vegetal',
            '1 colher de chá de extrato de baunilha',
            '240ml de água quente',
            'Para a cobertura: 200g de chocolate meio amargo, 200ml de natas'
        ],
        passos: [
            'Pré-aqueça o forno a 180°C. Unte e enfarinhe duas formas redondas de 20cm.',
            'Numa tigela grande, misture a farinha, açúcar, cacau, fermento, bicarbonato e sal.',
            'Adicione os ovos, leite, óleo e baunilha. Bata durante 2 minutos até ficar homogéneo.',
            'Adicione a água quente e mexa delicadamente. A massa ficará líquida.',
            'Divida a massa pelas formas e leve ao forno por 30-35 minutos.',
            'Deixe arrefecer completamente antes de desenformar.',
            'Para a cobertura: derreta o chocolate em banho-maria, adicione as natas e mexa bem.',
            'Cubra o bolo com a cobertura de chocolate e decore a gosto.'
        ]
    },
    'TarteDeMaca': {
        nome: 'Tarte de Maçã',
        imagem: 'img/recipe4.jpg',
        descricao: 'Massa crocante recheada com maçãs caramelizadas e um toque de canela. Sirva morna com gelado de baunilha para uma sobremesa clássica.',
        tempo: '50 min',
        dificuldade: 'Média',
        porcoes: '8 fatias',
        categoria: 'Sobremesas',
        ingredientes: [
            '1 massa quebrada (ou 250g de farinha, 125g de manteiga, 1 ovo, 1 pitada de sal)',
            '6-7 maçãs reineta descascadas e cortadas em fatias',
            '100g de açúcar',
            '1 colher de chá de canela em pó',
            '2 colheres de sopa de manteiga',
            '2 colheres de sopa de farinha',
            'Sumo de meio limão',
            '1 ovo batido para pincelar',
            'Açúcar em pó para polvilhar'
        ],
        passos: [
            'Pré-aqueça o forno a 190°C.',
            'Se fizer a massa: misture a farinha com a manteiga até formar farelos, adicione o ovo e sal. Amasse e leve ao frio 30 min.',
            'Estenda a massa e forre uma forma de tarte de 24cm. Pique o fundo com um garfo.',
            'Numa tigela, misture as maçãs com açúcar, canela, farinha e sumo de limão.',
            'Disponha as maçãs sobre a massa em círculos concêntricos. Coloque pedacinhos de manteiga por cima.',
            'Pincele as bordas da massa com ovo batido.',
            'Leve ao forno por 40-45 minutos até a massa ficar dourada e as maçãs caramelizadas.',
            'Deixe arrefecer ligeiramente e polvilhe com açúcar em pó antes de servir.'
        ]
    },
    'SaladaMediterranea': {
        nome: 'Salada Mediterrânea',
        imagem: 'img/recipe2.jpg',
        descricao: 'Mix de tomate, pepino, azeitonas e queijo feta com molho de azeite e oregãos. Fresca, saudável e pronta em minutos.',
        tempo: '20 min',
        dificuldade: 'Fácil',
        porcoes: '4 pessoas',
        categoria: 'Rápidas',
        ingredientes: [
            '4 tomates maduros cortados em cubos',
            '1 pepino cortado em cubos',
            '1 pimento verde cortado em tiras',
            '1 cebola roxa cortada em meias-luas finas',
            '150g de queijo feta em cubos',
            '100g de azeitonas pretas',
            '4 colheres de sopa de azeite virgem extra',
            '2 colheres de sopa de vinagre de vinho tinto',
            '1 colher de chá de oregãos secos',
            'Sal e pimenta a gosto'
        ],
        passos: [
            'Numa saladeira grande, coloque os tomates, pepino, pimento e cebola.',
            'Adicione as azeitonas e o queijo feta.',
            'Numa tigela pequena, misture o azeite, vinagre, oregãos, sal e pimenta.',
            'Regue a salada com o molho e mexa delicadamente.',
            'Deixe repousar 5 minutos para os sabores se misturarem.',
            'Sirva fresca como entrada ou acompanhamento.'
        ]
    },
    'BacalhauBras': {
        nome: 'Bacalhau à Brás',
        imagem: 'img/bacalhau.jpg',
        descricao: 'Prato tradicional português com bacalhau desfiado, batata palha e ovos. Um dos clássicos mais amados.',
        tempo: '45 min',
        dificuldade: 'Média',
        porcoes: '4 pessoas',
        categoria: 'Peixe',
        ingredientes: [
            '400g de bacalhau demolhado e desfiado',
            '500g de batata palha',
            '6 ovos',
            '2 cebolas grandes cortadas em juliana',
            '3 dentes de alho picados',
            'Azeitonas pretas a gosto',
            'Salsa picada',
            'Azeite',
            'Sal e pimenta a gosto'
        ],
        passos: [
            'Cozinhe o bacalhau em água durante 10 minutos. Escorra e desfie, retirando peles e espinhas.',
            'Numa frigideira com azeite, refogue a cebola e o alho até ficarem dourados.',
            'Adicione o bacalhau desfiado e refogue por 5 minutos.',
            'Bata os ovos numa tigela. Adicione a batata palha ao bacalhau e mexa.',
            'Retire do lume e adicione os ovos batidos, mexendo rapidamente.',
            'Tempere com sal e pimenta. A mistura deve ficar cremosa.',
            'Sirva decorado com azeitonas pretas e salsa picada.'
        ]
    },
    'CurryGraoVegetais': {
        nome: 'Curry de Grão com Vegetais',
        imagem: 'img/curry.jpg',
        descricao: 'Curry aromático vegan com grão-de-bico, legumes e especiarias. Saudável, nutritivo e cheio de sabor.',
        tempo: '35 min',
        dificuldade: 'Fácil',
        porcoes: '4 pessoas',
        categoria: 'Vegan',
        ingredientes: [
            '400g de grão-de-bico cozido',
            '2 cenouras cortadas em cubos',
            '1 pimento vermelho em tiras',
            '1 courgette cortada',
            '1 cebola picada',
            '2 dentes de alho',
            '400ml de leite de coco',
            '2 colheres de sopa de pasta de caril',
            '1 colher de chá de curcuma',
            'Coentros frescos',
            'Azeite, sal e pimenta'
        ],
        passos: [
            'Numa panela, refogue a cebola e o alho no azeite até ficarem macios.',
            'Adicione a pasta de caril e a curcuma. Refogue por 1 minuto.',
            'Junte todos os legumes e refogue por 5 minutos.',
            'Adicione o grão-de-bico e o leite de coco. Tempere com sal e pimenta.',
            'Deixe cozinhar em lume médio por 20 minutos até os legumes ficarem tenros.',
            'Ajuste os temperos e sirva com arroz basmati e coentros frescos.'
        ]
    },
    'BowlBuddha': {
        nome: 'Bowl Buddha Vegan',
        imagem: 'img/buddah.jpg',
        descricao: 'Bowl nutritivo e colorido com quinoa, vegetais assados, hummus e sementes. Completo e equilibrado.',
        tempo: '40 min',
        dificuldade: 'Fácil',
        porcoes: '2 pessoas',
        categoria: 'Vegan',
        ingredientes: [
            '150g de quinoa',
            '1 batata doce cortada em cubos',
            '1 brócolos em floretes',
            '1 cenoura cortada',
            '100g de grão-de-bico',
            '2 colheres de sopa de hummus',
            '1 abacate fatiado',
            'Sementes de sésamo e girassol',
            'Molho tahini',
            'Azeite, sal e pimenta'
        ],
        passos: [
            'Pré-aqueça o forno a 200°C. Cozinhe a quinoa conforme instruções da embalagem.',
            'Disponha a batata doce, brócolos, cenoura e grão numa assadeira.',
            'Regue com azeite, sal e pimenta. Asse por 25-30 minutos.',
            'Divida a quinoa por duas taças. Adicione os vegetais assados.',
            'Complete com abacate fatiado, hummus e sementes.',
            'Regue com molho tahini e sirva imediatamente.'
        ]
    },
    'WrapFrango': {
        nome: 'Wrap de Frango e Vegetais',
        imagem: 'img/wrap.jpg',
        descricao: 'Wrap rápido e saboroso com frango grelhado, vegetais frescos e molho de iogurte. Pronto em minutos.',
        tempo: '15 min',
        dificuldade: 'Fácil',
        porcoes: '2 pessoas',
        categoria: 'Rápidas',
        ingredientes: [
            '2 tortilhas grandes',
            '200g de peito de frango grelhado cortado em tiras',
            '1 tomate fatiado',
            '1/2 alface picada',
            '1/2 pepino em rodelas',
            '1 cenoura ralada',
            '100g de iogurte grego',
            '1 colher de sopa de maionese',
            'Sumo de meio limão',
            'Sal e pimenta'
        ],
        passos: [
            'Prepare o molho misturando o iogurte, maionese, sumo de limão, sal e pimenta.',
            'Aqueça ligeiramente as tortilhas numa frigideira ou micro-ondas.',
            'Espalhe o molho no centro de cada tortilha.',
            'Disponha o frango grelhado, alface, tomate, pepino e cenoura.',
            'Enrole as tortilhas dobrando as extremidades para dentro.',
            'Corte ao meio e sirva imediatamente. Pode acompanhar com batatas fritas.'
        ]
    }
};
