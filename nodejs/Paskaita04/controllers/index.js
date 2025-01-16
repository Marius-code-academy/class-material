const cars = [
  {
    id: 1,
    make: "Audi",
    year: 2019,
  },
  {
    id: 2,
    make: "BMW",
    year: 2020,
  },
  {
    id: 3,
    make: "Mercedes",
    year: 2021,
  },
];

const cases = [
  {
    id: 1,
    name: "Case 1",
    documents: [
      {
        id: 651,
        name: "Document 1",
        length: 100,
      },
    ],
  },
];

export function getCarById(req, res) {
  const { id } = req.params;

  const car = cars.find((c) => c.id === +id);

  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: `Car with id: ${id} not found` });
  }
}

export function getCaseDocumentByName(req, res) {
  const { caseId, documentName } = req.params;

  const caseObj = cases.find((c) => c.id === +caseId);

  if (!caseObj) {
    return res.status(404).json({ message: `Case with id: ${caseId} not found` });
  }

  const document = caseObj?.documents.find((d) => d.name === documentName);

  if (document) {
    res.json(document);
  } else {
    res.status(404).json({ message: `Document with name ${documentName} not found` });
  }
}
