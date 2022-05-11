//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;


contract Sender
{

    //When calling this function, be sure to pass
    // in the tx details as follows:
    //
    //  'to': *smart contract address*
    //  'value': *amount of ETH to be sent*
    //  'gas': *gas needed for the transaction*
    //  'maxFeePerGas': *must be higher than baseFeePerGas for the block'
    //  'nonce': nonce   //counts the number of transactions
    //
    // Submitting those tx details should automatically transfer the
    //  ETH from the senders metamask account to the smart contract

    function pay(address payable recipient) payable public returns (bool success)
    {
        //Transfers the ETH specified in the tx details from
        // the smart contract to the recipient's address
        (bool paid, ) = recipient.call{value: msg.value}("");

        //Reverts changes and refunds gas cost if the payment does not go through
        require(paid, "Payment unsuccessful.");

        return (paid);  //Returns whether or not the payment was successful
    }
}