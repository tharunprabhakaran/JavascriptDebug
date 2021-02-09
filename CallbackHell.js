/* Javascript Debugging */

/**
 * @task Make the given code Readable
 * @author tharunprabhakaran
 * @date 09/02/2021
 */


/**
 * Get Data
 * @returns {Promise} 
 */
async function getData(){

    let getData = new Promise((resolve, reject) => {
        db.getData((error, fetchedData) => {
            if (error) { reject(error) }
            resolve(fetchedData)
        })
    })

    return getData
}

/**
 * Process Data
 * @param {*} data 
 * @returns {Promise}
 */
async function processData(data) {

    let processedData = new Promise((resolve, reject) => {

        db.processData(data, (error, processedData) => {
            if (error) { reject(error) }
            resolve(processedData)
        })
    })
    return processedData
}

/**
 * Save Data
 * @returns {Promise}
 */
async function saveData(){

    let saveData = new Promise((resolve, reject) => {

        db.saveData((error, savedData) => {
            if (err) { reject(error) }
            resolve(savedData)
        })
    })
    return saveData
}


/**
 * Main Calling Function
 */
let main = async () => {
    try {

        /* Get Data */
        let fetchedData = await getData()

        /* Process Data */
        let data = fetchedData
        data[a] = "test"
        data[b] = 1111

        /* Update Data */
        let processedData = await processData(data)

        /* Save Data */
        await saveData()

        /* Exit */
        console.log("finished")

    } catch (error) {

        /* Handle Generic Error */
        console.log(error)

        /* Exit */
        return
    }

}

/* Call Main Runner */
main()


