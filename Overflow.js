/* Number over flow */

/**
 * @task Find the output
 * @author tharunprabhakaran
 * @date 09-02-2021
 */

/* Given Problem */
let z = 4153000000000000000 + 99

/* Output - Value of Z */
4153000000000000000

/** 
 * @Reason 
 * 1. The data type of variable 'z' is 'number'
 * 2. 'number' is an 64bit flaoting point, maximum value it can hold "SAFELY" is output of Number.MAX_SAFE_INTEGER, which is less than 4153000000000000000 
*/

/**
 * @Fix 
 * 1. BigInt Datatype can be used
 * 2. Third party libraries like Big Number (BN) can be used.
 */

/**
 * @Usecase
 * Ethereum's Web3.js heavily rely on Bignumber library for conversion between its Ethereum units.
 * As WEI to ETH conversion needs high precision.
 */