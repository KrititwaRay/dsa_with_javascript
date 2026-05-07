class TreeNode {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }

}



function buildFromArray (arr){
    if(!arr.length) return null;

    let root = new TreeNode(arr[0]);

    let queue = [root];
    let i = 1;


    while(i < arr.length){
        let current = queue.shift();

        if(arr[i] ){
            current.left = new TreeNode(arr[i]);
            queue.push(current.left)
        
        }
        i++
        if(i < arr.length && arr[i] ) {
            current.right = new TreeNode(arr[i]);
            queue.push(current.right)
        }
        i++
    }

    return root;
}


let arr = [1,2,3,4,5,null,8,null,null,6,7,9];
let root = buildFromArray (arr);




function preOrderTraversal(root){
    // root left right

    if(!root) return [];
    let ans = [];
    let stack = [root];


    while(stack.length != 0){
        let current = stack.pop();

        ans.push(current.val);
        current.right && stack.push(current.right)
        current.left && stack.push(current.left)
        
    }


    return ans;

}

let result = preOrderTraversal(root);
console.log(result)