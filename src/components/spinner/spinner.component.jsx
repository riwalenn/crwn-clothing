import { SpinnerOverlay, SpinnerContainer } from "./spinner.styles";
import {CategoryContainer} from "../../routes/category/category.styles";

const Spinner = () => (
    <SpinnerOverlay>
        <CategoryContainer></CategoryContainer>
    </SpinnerOverlay>
);

export default Spinner;