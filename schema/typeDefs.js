exports.typeDefs = `
    type Query {
        fetchArtistById(artist_id: ID!): Artist
        fetchAllImages: [Image]
        fetchImagesByWallId(wall_id: Int!): [Image]
        fetchAllWalls: [Wall]
        fetchWallById(wall_id: ID!): Wall
    }
    type Mutation {
        addImage(image_url: String!, blurb: String, wall_id: Int!): [Image]
        login(artist_username: String!, artist_password: String!): LoginResponse!
    }
    type LoginResponse {
        token: String
        user: Artist
    }
    type Artist {
        artist_id: ID!
        artist_username: String!
        artist_password: String!
        social_facebook: String
        social_instagram: String
        social_twitter: String
        social_website: String
        bio: String
        images: [Image]
    }
    type Wall {
        wall_id: ID!
        canvas_url: String!
        latitude: Float!
        longitude: Float!
        street_address: String
        info: String
        canvas_height: Float!
        canvas_width: Float!
        trigger_height: Float!
        trigger_width: Float!
        trigger_offset_x: Float!
        trigger_offset_y: Float!
        created_at: String!
        images: [Image]
    }
    type Consumer {
        consumer_id: ID!
        consumer_username: String!
        bio: String
    }
    type Image {
        image_id: ID!
        image_url: String!
        blurb: String
        wall_id: Wall
        artist_id: Int!
        created_at: String!
    }
    type Comment {
        comment_id: ID!
        comment_body: String!
        image_id: Int!
        consumer_id: Int!
        created_at: String!
    }
`;
