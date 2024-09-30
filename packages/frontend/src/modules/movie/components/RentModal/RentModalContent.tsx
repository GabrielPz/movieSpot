import { Box, IconButton, Stack, SxProps, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Movie } from "@/entities/api-models";
import { addMonths, format } from "date-fns";
import { DetaileMovieData } from "@/services/movies";
import { useAddRentedMovie } from "@/services/rentedMovies";

interface RentModalContentProps {
  onClose: () => void;
  movie: DetaileMovieData;
}
export const RentModalContent = ({ movie, onClose }: RentModalContentProps) => {
  const rentalDate = new Date();
  const availableUntil = addMonths(rentalDate, 1);

  return (
    <Box>
      <Stack direction="row" width="100%">
        <Typography id="modal-modal-title" variant="h3" component="h2">
          Alugar Filme
        </Typography>
        <IconButton
          aria-label="close"
          sx={{
            marginLeft: "auto",
          }}
          onClick={onClose}
        >
          <CloseIcon
            sx={{
              color: "white",
            }}
          />
        </IconButton>
      </Stack>
      <Typography sx={{ mt: 2 }} variant="h4">
        {movie!.title} - {movie!.releaseDate}
      </Typography>
      <Typography sx={{ mt: 2 }} variant="h4">
        Preço: R$ {movie!.rentPrice.toLocaleString("pt-BR")}
      </Typography>
      <Typography sx={{ mt: 2 }} variant="h4">
        Disponível até: {format(availableUntil, "dd/MM/yyyy")}
      </Typography>
    </Box>
  );
};
