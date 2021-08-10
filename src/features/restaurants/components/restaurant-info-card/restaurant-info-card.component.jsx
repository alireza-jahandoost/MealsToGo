import React from 'react';
import {Text} from '../../../../components/typography/text.component';
import {
    Section,
    Star,
    Rating,
    OpenIcon,
    Info,
    RestaurantCard,
    RestaurantCardCover,
    RestaurantIcon,
    InnerSection,
} from './restaurant-info-card.styles';
import {Spacer} from '../../../../components/spacer/spacer.component';

const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'
        ],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosingTemporarily = false,
        placeId,
    } = restaurant;
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover source={{ uri: photos[0] }}/>
            <Info>
                <Text variant="label"> {name} </Text>
                <Section>
                    <Rating>
                        {
                            ratingArray.map((elem, idx) =>
                                <Star key={`star-${placeId}-${idx}`} source={require('../../../../../assets/star.png')} />
                            )
                        }
                    </Rating>
                    <InnerSection>
                        {
                            isClosingTemporarily &&
                            <Text variant="error">
                                CLOSED TEMPORARILY
                            </Text>
                        }
                        {
                             isOpenNow &&
                             <Spacer position="left" size="large">
                                 <OpenIcon source={require('../../../../../assets/open.png')} />
                             </Spacer>
                        }
                        <Spacer position="left" size="large">
                            <RestaurantIcon source={{uri: icon}} />
                        </Spacer>
                    </InnerSection>
                </Section>
                <Text variant="caption"> {address} </Text>
            </Info>
        </RestaurantCard>
    )
}

export default RestaurantInfoCard;
