## Relay Node for Node-RED

This module provides a simple relay node for Node-RED. It allows you to control the flow of messages based on an "enable" or "disable" signal received on a specific topic.

### Installation

1. Download this module or clone the repository.
2. In your Node-RED user directory, run:

```bash
npm install .
```

or install it online as 

```bash 
npm install node-red-contrib-relay
```


### Usage

1. Add a "relay" node to your flow.
2. Configure the following properties:
    * **name:** A name for the node (optional).
3. Use "enable" and "disable" messages on the specified topic to control the node's behavior:
    * **Topic:** Set the topic to use for control messages (default: "control").
    * **Enable:** Send a message with `payload: true` on the topic to enable the node.
    * **Disable:** Send a message with `payload: false` on the topic to disable the node.
4. Connect the output of the node to other nodes in your flow.

**Example:**

```
[{"id":"64be663cf0206851","type":"tab","label":"relay","disabled":false,"info":"","env":[]},{"id":"525f10ada286a70a","type":"comment","z":"64be663cf0206851","name":"Relay Logic Node","info":"","x":150,"y":40,"wires":[]},{"id":"9ee575d0754121d8","type":"inject","z":"64be663cf0206851","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"true","payloadType":"bool","x":150,"y":260,"wires":[["d970975b7e294254"]]},{"id":"1ac3ad5411372426","type":"inject","z":"64be663cf0206851","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"false","payloadType":"bool","x":150,"y":320,"wires":[["dc289e3e44dd7d49"]]},{"id":"d970975b7e294254","type":"change","z":"64be663cf0206851","name":"","rules":[{"t":"set","p":"topic","pt":"msg","to":"enable","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":310,"y":260,"wires":[["b029a528116775e2"]]},{"id":"dc289e3e44dd7d49","type":"change","z":"64be663cf0206851","name":"","rules":[{"t":"set","p":"topic","pt":"msg","to":"disable","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":310,"y":320,"wires":[["b029a528116775e2"]]},{"id":"63a9df9c35bd02a4","type":"inject","z":"64be663cf0206851","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"5","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"","payloadType":"date","x":310,"y":400,"wires":[["b029a528116775e2"]]},{"id":"b029a528116775e2","type":"relay","z":"64be663cf0206851","name":"relay","x":530,"y":320,"wires":[["ca1ee575c701829a"]],"icon":"node-red/inject.svg"},{"id":"ca1ee575c701829a","type":"debug","z":"64be663cf0206851","name":"Output","active":true,"tosidebar":true,"console":false,"tostatus":true,"complete":"payload","targetType":"msg","statusVal":"payload","statusType":"auto","x":750,"y":320,"wires":[]}]

```

In this example, the "inject" node sends a message with `payload: true` on the topic "control" to enable the relay node. This allows any message received at the relay node's input to be passed through to its output. 

### Notes

* The node checks the message topic and payload to determine whether to enable or disable message forwarding. 
* The node's status reflects its current state (enabled/disabled).

### Author
* Harshad Joshi @ Bufferstack.IO Analytics Technology LLP, Pune

### Contributing

We welcome contributions to this project. Feel free to submit pull requests with improvements or bug fixes.

