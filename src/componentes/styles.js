import styled from 'styled-components'

const Path = styled.path`
  color: ${({$color}) => $color};
  fill: ${({$backgroundColor}) => $backgroundColor || '#3d3d3d'} !important;
  stroke: ${({$strokeColor}) => $strokeColor || '#fff'};
  stroke-width: 1.0404;
  stroke-linecap: round;
  stroke-linejoin: round;
`

const Svg = styled.svg`
	
`

const Text = styled.text`
  fill: ${({$labelColor}) => $labelColor|| '#3d3d3d'};
  font-size: 10px;
  cursor: pointer;
`

const Link = styled.a`
  cursor: pointer;
	:hover {
  	fill: purple;
	};
  text-decoration: none
`

export {Svg, Path, Text, Link};