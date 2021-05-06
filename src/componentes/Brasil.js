import React, {useState} from 'react';
import {Svg} from './styles';
import estados from "../estados";
import Estado from "./Estado";

function Brasil({backgroundColor, onClick, activeColor, strokeColor, labelColor, width, height}) {

	const [active, setActive] = useState(null)

	function getWidth() {
		return !!width ? width : '612.51611'
	}

	function getHeight() {
		return !!height ? height : '639.04297'
	}

	function handleClick(item) {
		const {sigla, nome} = item;
		onClick && onClick({sigla, nome})
		setActive(item)
	}

	return <div>
		<Svg
			version='1.1'
			x='0px'
			y='0px'
			viewBox="-74.008595 5.275696 -34.789914 -33.743888"
			width={getWidth()}
			height={getHeight()}
		>
			<g>
				{Object.keys(estados).map(key => {
					const item = estados[key];

					return (
						<Estado
							estado={item}
							activeColor={activeColor}
							backgroundColor={backgroundColor}
							strokeColor={strokeColor}
							labelColor={labelColor}
							onClick={handleClick}
							ativo={active === item}
						/>
					)
				})}
			</g>
		</Svg>
	</div>
}

function isValidColor(color) {
	const s = new Option().style;
	s.color = color;
	console.log(s.color === color)
	return s.color === color;
}

function color(props, propName, componentName) {
	const prop = props[propName];
	if (!!!prop) return;
	if (!isValidColor(prop))
		return new Error(`O componente ${componentName} requer uma cor válida para a propriedade ${propName}`)
}

// eslint-disable-next-line react/no-typos
Brasil.propTypes = {
	backgroundColor: color,
	activeColor: color,
	strokeColor: color,
	labelColor: color,
}

export default Brasil;
