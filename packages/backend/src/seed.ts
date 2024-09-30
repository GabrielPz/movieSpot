import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { prisma } from "./lib/prisma";

async function main() {
  const movies = [
    {
      title: "Oppenheimer",
      subTitle: "A História de J. Robert Oppenheimer",
      description:
        "A história do físico J. Robert Oppenheimer e seu papel na criação da bomba atômica durante a Segunda Guerra Mundial.",
      duration: 180,
      releaseDate: "2023-07-21",
      minimumAge: 14,
      rentPrice: 12.0,
      category: ["Drama", "Histórico"],
      trailerUrl: "https://www.youtube.com/watch?v=bK6ldnjE3Y0",
      movieUrl: "https://www.youtube.com/watch?v=bK6ldnjE3Y0",
      imageUrl:
        "https://br.web.img2.acsta.net/pictures/23/05/08/10/29/0695770.jpg",
      director: "Christopher Nolan",
      actors: ["Cillian Murphy", "Emily Blunt"],
      producers: ["Emma Thomas", "Charles Roven"],
      studio: "Universal Pictures",
      contentClassification: "PG-13",
      subtitles: ["Português", "Inglês"],
      audioLanguages: ["Inglês"],
      rating: 4.8,
    },
    {
      title: "John Wick 4",
      subTitle: "O Retorno de John Wick",
      description:
        "John Wick enfrenta novas ameaças e busca vingança em um mundo implacável de assassinos.",
      duration: 169,
      releaseDate: "2023-03-24",
      minimumAge: 16,
      rentPrice: 15.0,
      category: ["Ação", "Thriller"],
      trailerUrl: "https://www.youtube.com/watch?v=qEVUtrk8_B4",
      movieUrl: "https://www.youtube.com/watch?v=qEVUtrk8_B4",
      imageUrl:
        "https://clube-static.clubegazetadopovo.com.br/portal/wp-content/uploads/2023/03/John-Wick-01.jpg",
      director: "Chad Stahelski",
      actors: ["Keanu Reeves", "Donnie Yen"],
      producers: ["Basil Iwanyk", "Erica Lee"],
      studio: "Lionsgate",
      contentClassification: "R",
      subtitles: ["Português", "Inglês"],
      audioLanguages: ["Inglês"],
      rating: 4.7,
    },
    {
      title: "Avatar: O Caminho da Água",
      subTitle: "A Continuação de Pandora",
      description:
        "Jake Sully e Neytiri formam uma família e enfrentam novos desafios em Pandora.",
      duration: 192,
      releaseDate: "2022-12-16",
      minimumAge: 12,
      rentPrice: 12.0,
      category: ["Aventura", "Fantasia"],
      trailerUrl: "https://www.youtube.com/watch?v=d9MyW72ELq0",
      movieUrl: "https://www.youtube.com/watch?v=d9MyW72ELq0",
      imageUrl:
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/1751F943EF9583B0969B9B56638CF52901D91571D7C29E030993525A2BCD1A83/scale?width=1200&aspectRatio=1.78&format=webp",
      director: "James Cameron",
      actors: ["Sam Worthington", "Zoe Saldaña"],
      producers: ["James Cameron", "Jon Landau"],
      studio: "20th Century Studios",
      contentClassification: "PG-13",
      subtitles: ["Português", "Inglês"],
      audioLanguages: ["Inglês"],
      rating: 4.6,
    },
    {
      title: "Missão Impossível: Acerto de Contas Parte 1",
      subTitle: "O Retorno de Ethan Hunt",
      description:
        "Ethan Hunt enfrenta sua missão mais perigosa até agora, envolvendo conspirações e traições.",
      duration: 163,
      releaseDate: "2023-07-14",
      minimumAge: 12,
      rentPrice: 14.0,
      category: ["Ação", "Aventura"],
      trailerUrl: "https://www.youtube.com/watch?v=qzgtPBV_hXI",
      movieUrl: "https://www.youtube.com/watch?v=qzgtPBV_hXI",
      imageUrl:
        "https://s2-techtudo.glbimg.com/FRFjr7Q96jwYOyXzd9nJZ9w1Y24=/0x0:1280x719/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/3/F/ICpFVoSeKoShRARsvyTA/post-43953.jpg",
      director: "Christopher McQuarrie",
      actors: ["Tom Cruise", "Rebecca Ferguson"],
      producers: ["Tom Cruise", "J.J. Abrams"],
      studio: "Paramount Pictures",
      contentClassification: "PG-13",
      subtitles: ["Português", "Inglês"],
      audioLanguages: ["Inglês"],
      rating: 4.7,
    },
    {
      title: "Dungeons & Dragons: Honra Entre Rebeldes",
      subTitle: "A Aventura Começa",
      description:
        "Um grupo de aventureiros embarca em uma missão para recuperar uma relíquia perdida.",
      duration: 134,
      releaseDate: "2023-03-31",
      minimumAge: 12,
      rentPrice: 13.0,
      category: ["Fantasia", "Aventura"],
      trailerUrl: "https://www.youtube.com/watch?v=I4uF5iI8g-A",
      movieUrl: "https://www.youtube.com/watch?v=I4uF5iI8g-A",
      imageUrl:
        "https://br.web.img3.acsta.net/pictures/22/12/08/18/11/4403832.jpg",
      director: "Jonathan Goldstein",
      actors: ["Chris Pine", "Michelle Rodriguez"],
      producers: ["Jeremy Latcham", "Brian Goldner"],
      studio: "Paramount Pictures",
      contentClassification: "PG-13",
      subtitles: ["Português", "Inglês"],
      audioLanguages: ["Inglês"],
      rating: 4.4,
    },
    {
      title: "Barbie",
      subTitle: "A Vida em Barbielândia",
      description:
        "Barbie embarca em uma aventura no mundo real, desafiando suas próprias ideias de perfeição.",
      duration: 114,
      releaseDate: "2023-07-21",
      minimumAge: 10,
      rentPrice: 10.0,
      category: ["Comédia", "Fantasia"],
      trailerUrl: "https://www.youtube.com/watch?v=pBk4NYhWNMM",
      movieUrl: "https://www.youtube.com/watch?v=pBk4NYhWNMM",
      imageUrl:
        "https://i0.wp.com/controle.topview.com.br/wp-content/uploads/2023/07/cartaz-filme-barbie.jpeg?resize=414%2C600&ssl=1",
      director: "Greta Gerwig",
      actors: ["Margot Robbie", "Ryan Gosling"],
      producers: ["Margot Robbie", "Tom Ackerley"],
      studio: "Warner Bros.",
      contentClassification: "PG-13",
      subtitles: ["Português", "Inglês"],
      audioLanguages: ["Inglês"],
      rating: 4.5,
    },
    {
      title: "Indiana Jones e o Chamado do Destino",
      subTitle: "A Última Aventura",
      description:
        "Indiana Jones embarca em mais uma missão épica para proteger um artefato misterioso.",
      duration: 154,
      releaseDate: "2023-06-30",
      minimumAge: 12,
      rentPrice: 15.0,
      category: ["Aventura"],
      trailerUrl: "https://www.youtube.com/watch?v=eQfMbSe7F2g",
      movieUrl: "https://www.youtube.com/watch?v=eQfMbSe7F2g",
      imageUrl:
        "https://www.laranjacast.com.br/wp-content/uploads/2023/12/Indiana-Jones-e-o-Chamado-do-Destino_01-1024x576.jpeg",
      director: "James Mangold",
      actors: ["Harrison Ford", "Phoebe Waller-Bridge"],
      producers: ["Kathleen Kennedy", "Frank Marshall"],
      studio: "Lucasfilm",
      contentClassification: "PG-13",
      subtitles: ["Português", "Inglês"],
      audioLanguages: ["Inglês"],
      rating: 4.3,
    },
    {
      title: "A Pequena Sereia",
      subTitle: "A Nova Versão do Clássico",
      description:
        "Ariel, uma sereia jovem e curiosa, deseja explorar o mundo humano.",
      duration: 135,
      releaseDate: "2023-05-26",
      minimumAge: 10,
      rentPrice: 12.0,
      category: ["Fantasia", "Musical"],
      trailerUrl: "https://www.youtube.com/watch?v=kpGo2_d3oYE",
      movieUrl: "https://www.youtube.com/watch?v=kpGo2_d3oYE",
      imageUrl:
        "https://static.wikia.nocookie.net/disneyprincesas/images/c/c2/A_Pequena_Sereia_1989_-_P%C3%B4ster_Nacional.jpg/revision/latest?cb=20240311211524&path-prefix=pt-br",
      director: "Rob Marshall",
      actors: ["Halle Bailey", "Javier Bardem"],
      producers: ["Marc Platt", "Lin-Manuel Miranda"],
      studio: "Walt Disney Pictures",
      contentClassification: "PG",
      subtitles: ["Português", "Inglês"],
      audioLanguages: ["Inglês"],
      rating: 4.4,
    },
  ];

  for (const movie of movies) {
    await prisma.movie.upsert({
      where: { title: movie.title },
      update: {},
      create: movie,
    });
  }

  // Seed de usuário admin
  const adminEmail = "admin@example.com";
  const adminPassword = "admin123";

  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: "Admin",
      cpf: "000.000.000-00",
      email: adminEmail,
      phone: "0000000000",
      password: hashedPassword,
      role: "ADMIN",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
