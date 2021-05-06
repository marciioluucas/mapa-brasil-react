import {useMemo} from "react";
import {Link, Path, Text} from "./styles";

export default function Estado({estado, onClick, ativo, activeColor, backgroundColor, labelColor, strokeColor}) {

	const {nome, coordenadas, sigla, transform} = estado;

	function handleClick() {
		onClick && onClick(estado);
	}

	const cor = useMemo(()=> {
		return ativo ? activeColor : backgroundColor;
	}, [ativo, activeColor, backgroundColor])

	return (
		<Link
			id={`estado-${sigla}`}
			onClick={(e) => {
				e.preventDefault()
				handleClick();
			}}
			$color={cor}
			href=' '
		>
			<title>{nome}</title>
			<Path $backgroundColor={cor} $strokeColor={strokeColor}  d={coordenadas[0]}/>
			{/*{coordenadas.length ===2 && <path style={{fill: cor}} stroke={strokeColor}  stroke-width={1.0404}  stroke-linecap={'round'} stroke-linejoin={'round'} d={coordenadas[1]}/>}*/}
			<Text transform={transform} $labelColor={labelColor}>{sigla}</Text>
		</Link>
	)
}