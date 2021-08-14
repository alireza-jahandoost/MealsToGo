import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import {colors} from '../../../../infrastructure/theme/colors';
import {space} from '../../../../infrastructure/theme/spacing';


export const StyledButton = styled(Button).attrs({
    color: colors.brand.primary
})`
    padding: ${space[2]}
`
