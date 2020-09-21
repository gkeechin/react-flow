---
id: react-flow-component-props
title: React Flow Component Prop Types
sidebar_label: Prop Types
---

### Basic Props
- `elements`: array of [nodes](#nodes) and [edges](#edges) *(required)*
- `style`: css properties
- `className`: additional class name

### Flow View
- `minZoom`: default: `0.5`
- `maxZoom`: default: `2`
- `defaultZoom`: default: `1`
- `defaultPosition`: default: `[0, 0]`
- `snapToGrid`: default: `false`
- `snapGrid`: [x, y] array - default: `[16, 16]`
- `onlyRenderVisibleNodes`: default: `true`
- `translateExtent`: [default `[[-∞, -∞], [+∞, +∞]]`](https://github.com/d3/d3-zoom#zoom_translateExtent)

### Event Handlers
- `onElementClick(event: MouseEvent, element: Node | Edge)`: called when user clicks node or edge
- `onElementsRemove(elements: Elements)`: called when user removes node or edge
- `onNodeDragStart(event: MouseEvent, node: Node)`: node drag start
- `onNodeDragStop(event: MouseEvent, node: Node)`: node drag stop
- `onNodeMouseEnter(event: MouseEvent, node: Node)`: node mouse enter
- `onNodeMouseMove(event: MouseEvent, node: Node)`: node mouse move
- `onNodeMouseLeave(event: MouseEvent, node: Node)`: node mouse leave
- `onNodeContextMenu(event: MouseEvent, node: Node)`: node context menu
- `onConnect({ source, target })`: called when user connects two nodes
- `onConnectStart(event: MouseEvent, { nodeId, handleType })`: called when user starts to drag connection line
- `onConnectStop(event: MouseEvent)`: called when user stops to drag connection line
- `onConnectEnd(event: MouseEvent)`: called after user stops or connects nodes
- `onLoad(reactFlowInstance)`: called after flow is initialized
- `onMove(flowTransform: FlowTransform)`: called when user is panning or zooming
- `onMoveStart(flowTransform: FlowTransform)`: called when user starts panning or zooming
- `onMoveEnd(flowTransform: FlowTransform)`: called when user ends panning or zooming
- `onSelectionChange(elements: Elements)`: called when user selects one or multiple elements
- `onSelectionDragStart(evt: MouseEvent, nodes: Node[])`: called when user starts to drag a selection
- `onSelectionDrag(evt: MouseEvent, nodes: Node[])`: called when user drags a selection
- `onSelectionDragStop(evt: MouseEvent, nodes: Node[])`: called when user stops to drag a selection
- `onSelectionContextMenu(event: MouseEvent, nodes: Node[])`: called when user does a right-click on a selection
- `onPaneClick(event: MouseEvent)`: called when user clicks directly on the canvas
- `onPaneContextMenu(event: MouseEvent)`: called when user does a right-click on the canvas
- `onPaneScroll(event: WheelEvent)`: called when user scrolls pane (only works when `zoomOnScroll` is set to `false)

### Interaction
- `nodesDraggable`: default: `true`. This applies to all nodes. You can also change the behavior of a specific node with the `draggable` node option
- `nodesConnectable`: default: `true`. This applies to all nodes. You can also change the behavior of a specific node with the `connectable` node option
- `elementsSelectable`: default: `true`. This applies to all elements. You can also change the behavior of a specific node with the `selectable` node option
- `zoomOnScroll`: default: `true`
- `zoomOnDoubleClick`: default: `true`
- `selectNodesOnDrag`: default: `true`
- `paneMoveable`: default: `true` - If set to `false`, panning and zooming is disabled

### Element Customization
- `nodeTypes`: object with [node types](#node-types--custom-nodes)
- `edgeTypes`: object with [edge types](#edge-types--custom-edges)
- `arrowHeadColor`: default: `#bbb`

### Connection Line Options
- `connectionLineType`: connection line type = `default` (bezier), `straight`, `step`, `smoothstep`
- `connectionLineStyle`: connection style as svg attributes
- `connectionLineComponent`: [custom connection line component](/example/src/CustomConnectionLine/index.js)

### Keys
- `deleteKeyCode`: default: `8` (delete)
- `selectionKeyCode`: default: `16` (shift)
