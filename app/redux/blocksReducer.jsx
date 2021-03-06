var _ = require('underscore');

module.exports = function(blocks, action){
    if(blocks==undefined){
        blocks = [];
    }

    switch(action.type){
        case "GET_BLOCKS":
            return action.blocks;

        case "ADD_BLOCK":
            return [
                ...blocks,
                action.block
            ];

        case "UPDATE_BLOCK":
            return blocks.map( function(block){
                if(block._id == action.updatedBlock._id)
                    return action.updatedBlock
                return block;
            });

        case "DELETE_BLOCK":
            return _.reject(blocks, function(block){
                return block._id === action._id
            })

        default:
            return blocks
    }
}
