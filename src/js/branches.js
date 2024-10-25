const branches = [
  {
    city: "თბილისი",
    address: "წერეთელი",
    phone: "+995 (32) 2 60 30 60",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "20:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "19:00",
      },
    },
  },
  {
    city: "თბილისი",
    address: "პეტრე ქავთარაძე",
    phone: "+995 591 971 962",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "20:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "19:00",
      },
    },
  },
  {
    city: "ბათუმი",
    address: "ტბელ აბუსერიძე",
    phone: "+995 591 310 257",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "20:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "19:00",
      },
    },
  },
  {
    city: "ქუთაისი",
    address: "თამარ მეფის ქ.",
    phone: "+955 591 967 605",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "20:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "19:00",
      },
    },
  },
  {
    city: "თბილისი",
    phone: "+995 599 862 449",
    address: "თბილისი ცენტრალი - III სართული",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "20:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "19:00",
      },
    },
  },
  {
    city: "თბილისი",
    phone: "+995 591 967 608",
    address: "თბილისი მოლი - I სართული, აღმაშენებლის ხეივანი მე-16 კმ",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "22:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "22:00",
      },
    },
  },
  {
    city: "თბილისი",
    phone: "+995 591 967 673",
    address: "გლდანი მოლი - I სართული, M-ახმეტელის მიმდებარე",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "21:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "22:00",
      },
    },
  },
  {
    city: "თბილისი",
    phone: "+995 591 340 476",
    address: "ისთ ფოინთი - ალ. თვალჭრელიძე N2",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "22:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "12:00",
      },
    },
  },
  {
    city: "რუსთავი",
    phone: "+995 591 441 082",
    address: "შარტავას და ლომოურის კვეთა",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "20:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "19:00",
      },
    },
  },
  {
    city: "ბათუმი",
    phone: "+995 591 310 257",
    address: "Black Sea Mall - ტბელ აბუსერიძის N22",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "20:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "21:00",
        endTime: "21:00",
      },
    },
  },
  {
    city: "ბათუმი",
    phone: "+995 591 967 606",
    address: "ჭავჭავაძის N21",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "20:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "19:00",
      },
    },
  },
  {
    city: "ბათუმი",
    phone: "+995 591 022 872",
    address: "გრანდ მოლი - შერიფ ხიმშიაშვილის 29",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "22:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "22:00",
      },
    },
  },
  {
    city: "ქუთაისი",
    phone: "+955 591 967 605",
    address: "თამარ მეფის ქ. N3 , ქუთაისის ცენტრალური მოედანი",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "20:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "19:00",
      },
    },
  },
  {
    city: "ქუთაისი",
    phone: "+995 595 306 765",
    address: "ვესთ მოლი - შარტავას N2",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "22:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "22:00",
      },
    },
  },
  {
    city: "ქუთაისი",
    phone: "+995 591 967 604",
    address: "გრანდ მოლი - მაღაზია 139. ჭავჭავაძის ქ. N67",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "18:30",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "18:30",
      },
    },
  },
  {
    city: "ზუგდიდი",
    phone: "+995 591 676 489",
    address: "ზუგდიდი, კოსტავას ქუჩა №28",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "22:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "22:00",
      },
    },
  },
  {
    city: "თელავი",
    phone: "+995 595 069 853",
    address: "თელავი მოლი - ალაზნის ქ.N77",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "20:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "20:00",
      },
    },
  },
  {
    city: "ახალციხე",
    phone: "+995 598 088 659",
    address: "ახალციხე, თამარ მეფის ქ. N9",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "19:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "19:00",
      },
    },
  },
  {
    city: "გორი",
    phone: "+995 591 198 248",
    address: "გორი, ცხინვალის გზატკეცილი 14-14ა",
    workingHours: {
      default: {
        startTime: "10:00",
        endTime: "19:00",
      },
      sunday: {
        day: "კვირა",
        startTime: "10:00",
        endTime: "19:00",
      },
    },
  },
];

const cityButton = document.getElementById("cityButton");
const cityList = document.getElementById("cityList");
const branchContainer = document.getElementById("branches-container");
const brancsearch = document.getElementById("branchSearch");
const openStatusChechbox = document.getElementById("openStatus");

cityButton.addEventListener("click", () => {
  cityList.classList.toggle(hidden);
});
// chamosashlel meniushi qalaqebis ghilakis shekmna

const uniqueCities = [...new set(branches.map((branch) => branch.city))];
uniqueCities.forEach((city) => {
  const cityButton = document.createElement("button");
  cityButton.textContent = city;
  cityButton.classList.add("city-button");
  cityButton.addEventListener("click", () => {
    filteredBranchesByCity(city);
    cityList.classList.add("hidden");
  });
  cityList.appendChild(cityButton);
});

function displayBranches(filteredBranches) {
  branchContainer.innerHTML = "";
  if (filteredBranches.length === 0) {
    branchContainer.innerHTML = "<p>ფილიალები არ მოიძებნა</p>";
  }
  filteredBranches.for.Each((branch, index) => {
    const branchCard = document.createElement("div");
    branchCard.classList.add("branch-card");

    branchCard.setAttribute("data-id", index);
    const getWorkingHours = () => {
      const { default: defaultHours, sunday } = branch.workingHours;
      const defaultDays = "ორშაბათი-შაბათი";
      return `<p>${defaultDays}: ${defaultHours.startTime} - ${defaultDays.endTime} </p>
  <p>${sunday.day}; ${sunday.startTime} - $ {sunday.endTime}</p>`;
    };
    branch.card.innerHtml = `
<h3>${branch.city}</h3>
<p>Adress:${branch.adress}</p>
<p>Phone:$branch.phone}</p>
<div>${getWorkingHours}</div>


`;
  });
}
function filteredBranchesByCity(city) {
  const filteredBranches = branches.filter((branch) => branch.city === city);
  displayBranches(filteredBranches);
}
displayBranches(branches);
