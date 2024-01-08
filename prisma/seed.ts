const { PrismaClient } = require("@prisma/client");
const fs = require("fs");
const billboardPath = "./public/data/billboards.json";
const ownerPath = "./public/data/owners.json";
const { faker } = require("@faker-js/faker");

const prisma = new PrismaClient();

// Creates an array of random billboards of a given size. Takes the number of owners and randomly assigns an owner to each billboard
async function createRandomBillboard(
  numberOfBillboards: number,
  numberOfOwners: number
) {
  const billboards = [];
  let randomOwner;
  for (let i = 0; i < numberOfBillboards; i++) {
    randomOwner = Math.floor(Math.random() * numberOfOwners) + 1;
    billboards.push({
      billboardName: faker.helpers.objectValue({
        super: "Super Billboard",
        mega: "Mega Billboard",
        giga: "Giga Billboard",
        decent: "Decent Billboard",
        small: "Small Billboard",
        tiny: "Tiny Billboard",
        large: "Large Billboard",
        irresistible: "Irresistible Billboard",
        unforgettable: "Unforgettable Billboard",
      }),
      market: faker.location.city(),
      vendor: faker.company.name(),
      mediaType: faker.helpers.objectValue({
        digital: "Digital",
        static: "Static",
        mobile: "Mobile",
        other: "Other",
      }),
      unitNumber: faker.string.alphanumeric(6),
      tabId: faker.string.alphanumeric(4),
      description: faker.lorem.paragraph(2),
      face: faker.helpers.objectValue({
        n: "North",
        s: "South",
        e: "East",
        w: "West",
      }),
      sizeX: faker.string.numeric(2),
      sizeY: faker.string.numeric(3),
      pixels: faker.string.numeric(2),
      illuminated: faker.datatype.boolean(),
      weeklyEOIs: faker.number.int(100),
      fourWeekRateCard: faker.commerce.price({ min: 100, max: 200 }),
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
      availableTiming: faker.date.soon(),
      ownerId: randomOwner,
    });
  }
  return billboards;
}
//Creates an array of random owners of a given size, id's are assigned in order
async function createRandomUser(numberOfOwners: number) {
  const owners = [];
  for (let i = 0; i < numberOfOwners; i++) {
    owners.push({
      id: i + 1,
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
    });
  }
  console.log(owners);
  return owners;
}

// const users = [...Array(100)].map(createRandomUser);
// const fakeBillboard = [...Array(100)].map(createRandomBillboard);

async function loadData(type: string) {
  if (type == "billboards") {
    const data = fs.readFileSync(billboardPath, "utf8");
    return JSON.parse(data);
  }
  if (type == "owners") {
    const data = fs.readFileSync(ownerPath, "utf8");
    return JSON.parse(data);
  }
}

async function main(type: string) {
  let data;
  if (type == "billboards") {
    data = await loadData("billboards");
    await prisma.billboard.createMany({
      data: data,
    });
  } else if (type == "owners") {
    await prisma.owner.createMany({
      data: data,
    });
  } else if (type == "faker") {
    const billboardData = await createRandomBillboard(10, 10);
    // const ownerData = await createRandomUser(10);
    // await prisma.owner.createMany({
    //   data: ownerData,
    // });

    console.log(billboardData);
    await prisma.billboard.createMany({
      data: billboardData,
    });
  } else if (type == "delete") {
    await prisma.billboard.deleteMany({});
    await prisma.owner.deleteMany({});
  } else {
    console.error("Invalid type: " + type);
  }
}

main(process.argv[2])
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
