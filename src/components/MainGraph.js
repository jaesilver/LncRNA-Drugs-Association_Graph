import React from 'react'
import Graph from 'react-vis-network-graph'
import {edges, nodes} from './data'

export default function MainGraph() {

    var options = {
        nodes:{
            shape: "dot",
            scaling: {
                min: 10,
                max: 30,
                label: {
                    min: 8,
                    max: 30,
                    drawThreshold: 12,
                    maxVisible: 60
                }
            },
            font: {
                size: 14,
                face: "Tahoma",
                color: "#ffffff"
            }
        },
        edges: {
            width: 0.2,
            color: {inherit: "from"},
            smooth: {
                type: "continuous"
            }
        },
        interaction: {
            navigationButtons: true,
            tooltipDelay: 100,
            hideEdgesOnDrag: true,
            hideEdgesOnZoom: true,
            hideEdgesOnSelection: true,
            hideNodesOnSelection: true
        },
        height: "900px",
        physics: {
            enabled: true,
            barnesHut: {
                gravitationalConstant: -8000,
                centralGravity: 0.5,
                springLength: 300,
                springConstant: 0.04,
                damping: 0.09,
                avoidOverlap: 1
            },
            solver: 'barnesHut',
            stabilization: {
                iterations: 500
            }
        }
        
    }

    var data = {nodes: nodes, edges: edges}
  return (
    <div className='container' style={{ width: '100%' }}>
        <Graph
            graph = {data}
            options={options}
        />
    </div>
  )
}