module.exports = function(RED) {
    function RelayNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var isEnabled = false; // Variable to track whether the node is enabled or disabled

        // Initialize status
        node.status({ fill: "red", shape: "ring", text: "Disabled" });

        // Handle incoming messages
        node.on('input', function(msg) {
            // Check if input is true and topic is 'enable'
            if (msg.payload === true && msg.topic === 'enable') {
                isEnabled = true;
                node.status({ fill: "green", shape: "dot", text: "Enabled" });
            }
            // Check if input is false and topic is 'disable'
            else if (msg.payload === false && msg.topic === 'disable') {
                isEnabled = false;
                node.status({ fill: "red", shape: "ring", text: "Disabled" });
            }
            // If node is enabled, allow all messages to pass through
            else if (isEnabled) {
                node.send(msg);
            }
        });
    }
    RED.nodes.registerType("relay", RelayNode);
}

