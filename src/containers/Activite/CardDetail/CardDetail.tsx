import frenchTranslation from "@/constants/frenchTranslation"
import Card from "@/interfaces/DB/Card"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"

const CardDetail = ({ card }: { card: Card }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Nom
            </TableCell>
            <TableCell>{card.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Code
            </TableCell>
            <TableCell>{card.code}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center" colSpan={2} scope="row">
              <img src={card.image} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Abilités
            </TableCell>
            <TableCell>
              {(frenchTranslation[card.code] || card.ability).map((ability, idx) => (
                <ul key={`${card.code}-${idx}`}>{ability}</ul>
              ))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CardDetail
