var leafSimilar = function(root1, root2) {
    var dfs = function(root, leaf) {
        if (root == null) {
            return
        };
        if (!root.left && !root.right) {
            leaf.push(root.val);
            return
        };
        dfs(root.left, leaf);
        dfs(root.right, leaf);
    };
    let leaf1 = [];
    let leaf2 = [];

    dfs(root1, leaf1);
    dfs(root2, leaf2);
    return JSON.stringify(leaf1) === JSON.stringify(leaf2);


};
