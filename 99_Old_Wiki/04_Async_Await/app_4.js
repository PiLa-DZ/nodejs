// *** Sequential vs Parallel Operations ***

// Helper function to simulate an API call
const getApiData = (ID) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(`This Api Data For ${ID} 😁`)
  }, 1000)
})

// Sequential operation - takes ~3 seconds
const fetchSequential = async () => {
  console.time(`Sequential`)
  const data1 = await getApiData(1)
  const data2 = await getApiData(2)
  const data3 = await getApiData(3)
  console.timeEnd(`Sequential`)
  return [data1, data2, data3]
}

// Parallel operation - takes ~1 second
const fetchParallel = async () => {
  console.time(`Parallel`)
  const data = await Promise.all([
    getApiData(1),
    getApiData(2),
    getApiData(3),
  ])
  console.timeEnd(`Parallel`)
  return data
}

// Demo
const runDemo = async () => {
  console.log(`Run Sequential 😍 ${'-'.repeat(30)}>`)
  const seqResult = await fetchSequential()
  console.log(seqResult)

  console.log(`Run Parallel 🙂 ${'-'.repeat(30)}>`)
  const parResult = await fetchParallel()
  console.log(parResult)
}

runDemo()

/* Output:
Run Sequential 😍 ------------------------------>
Sequential: 3.004s
[
  'This Api Data For 1 😁',
  'This Api Data For 2 😁',
  'This Api Data For 3 😁'
]
Run Parallel 🙂 ------------------------------>
Parallel: 1.001s
[
  'This Api Data For 1 😁',
  'This Api Data For 2 😁',
  'This Api Data For 3 😁'
]
*/
