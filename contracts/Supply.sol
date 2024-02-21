//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Supply{
    enum ProductStatus {Pending, Transit, Delivered}

    struct Product{
        address sender;
        address receiver;
        uint256 pickupTime;
        uint256 deliveryTime;
        uint256 dist;
        uint cost;
        ProductStatus status;
        bool isApproved;
    }

    mapping(address => Product[]) public products;
    uint256 public productCount;

    struct TypeProduct{
        address sender;
        address receiver;
        uint256 pickupTime;
        uint256 deliveryTime;
        uint256 dist;
        uint cost;
        ProductStatus status;
        bool isApproved;
    }

    TypeProduct[] typeproducts;
    
    event ShipmentCreated(address indexed sender, address indexed reciever, uint256 cost, uint256 pickupTime, uint256 dist){
        
    }
}