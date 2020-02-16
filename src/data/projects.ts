import { ImageSourcePropType } from 'react-native'

export enum ItemType {
  DESCRIPTION,
  IMAGE,
  SUBHEADING,
  TITLE
}

interface Projects {
  [key: string]: {
    cover: ImageSourcePropType
    items: ProjectItem[]
  }
}

export type ProjectItem = DescriptionItem | TitleItem | ImageItem | SubheadingItem

interface TitleItem {
  type: ItemType.TITLE
  value: string
}

interface SubheadingItem {
  type: ItemType.SUBHEADING
  value: string
}

interface DescriptionItem {
  type: ItemType.DESCRIPTION
  value: string
}

interface ImageItem {
  type: ItemType.IMAGE
  value: ImageSourcePropType
  widthPercent?: number
}

export const projects: Projects = {
  airAsia: {
    cover: require('~assets/images/projects/airAsia/cover.jpg'),
    items: [
      {
        type: ItemType.TITLE,
        value: 'AirAsia'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'The initial pitch to AirAsia was a ‘destination lottery’ competition, in which contestants would enter for a chance to win a trip to a country drawn at random each month. The pitch was successful, however the brief was changed into a 3 part video series, including display advertising, custom articles and custom graphics. The focus of the campaign was to draw attention to Kuala Lumpur as a holiday destination. AirAsia signed on for another campaign to promote airfare sales to Taiwan, that included animated display ads.\n'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Agency:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Pedestrian.TV'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Skills:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Badge Design, Branding, Advertising Design, Animation, Icon Design, 3D'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Role:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'The initial pitch required a title-slide to introduce the viewers to the idea. 3D modelling was used to create an illustration that highlighted the idea, accompanied by a title lockup.\n\nA ‘KL on the DL’ lock-up badge was required for use in the campaign. Several variations were created to run on different media. This lockup was then animated for use in each video.\n\nDisplay ads were then created to run on site using the lockup, to promote KL as a destination. Background photography was sourced from GettyImages.\n\nThe native articles accompanying the videos also required custom maps for users to visualise the destinations highlighted in each video. Custom icon/badges for each location was created for use on the map.'
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/airAsia/1.png')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/airAsia/2.gif'),
        widthPercent: 50
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/airAsia/3.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/airAsia/4.gif')
      }
    ]
  },
  allure: {
    cover: require('~assets/images/projects/allure/cover.jpg'),
    items: [
      {
        type: ItemType.TITLE,
        value: 'Allure All-In Posters'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'The CEO of Allure Media requested a series of posters to be debuted at the company All-In for the quarter. The request was to create something that spurred the viewer and to lift company morale - a ‘shot in the arm’.\n'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Agency:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Allure Media'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Skills:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Poster Design, Print, Branding, Illustration'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Role:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'The poster series have a grungy vibe, a tone that is not too corporate. The theme of the posters was the Allure ‘PACT,’ and the strong imagery reflects this. Throughout the poster series there is also strong symbolism of motion, and the busy-ness aims to create a sense of urgency and evoke strong emotion in the viewer. The poster series was designed as a system, where the first poster is the central poster describing the whole PACT, and posters 2-4 were peripheral posters situated around the office to draw people in.'
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/allure/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/allure/2.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/allure/3.jpg')
      }
    ],
  },
  allureRefresh: {
    cover: require('~assets/images/projects/allureRefresh/cover.jpg'),
    items: [
      {
        type: ItemType.TITLE,
        value: 'Allure Brand Refresh'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'A brief from the National Sales Manager of Allure Media to refresh some of Allure’s branding. The aim was to build Allure media’s presence within the industry, and to raise awareness of its international ties.'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Agency:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Allure Media'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Skills:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Branding, Illustration'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Role:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'New colours were selected to stand out, based on research of other media brands in market. The main colour, Robin’s Egg Blue, in combination with it’s accent colour give off a fresh, and premium vibe. Raleway was selected as the new typeface, a geometric sans-serif to give off a modern, and direct vibe. A main goal of the brand refresh was to raise awareness of Allure’s international scale. This was highlighted in the skyline branding element, compromising of various international monuments. The style of illustration and iconography is reflective of web icon trends, which is fitting for a digital media company. These branding touch-points were employed in all external facing collateral.'
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/allureRefresh/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/allureRefresh/2.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/allureRefresh/3.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/allureRefresh/4.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/allureRefresh/5.jpg')
      }
    ]
  },
  allureSocial: {
    cover: require('~assets/images/projects/allureSocial/cover.jpg'),
    items: [
      {
        type: ItemType.TITLE,
        value: 'Allure Social Committee'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'The Allure Social Committee (ASC) requested invite designs for each of their events and functions.\n'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Agency:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Allure Media'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Skills:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Poster Design, Print Design, Photo editing, Illustration'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Role:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Each event was usually themed, and this was asked to be reflected in the designs of the invites. Designs for the ASC were usually free from Allure Branding, which allowed for a more open ended and creative design. The main concern expressed by the committee was legibility and readability, as these invites were to be printed at various sizes as per brief requirements and displayed around the office at certain points.'
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/allureSocial/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/allureSocial/2.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/allureSocial/3.jpg')
      }
    ]
  },
  biggestBeerRun: {
    cover: require('~assets/images/projects/biggestBeerRun/cover.jpg'),
    items: [
      {
        type: ItemType.TITLE,
        value: 'BWS: The Worlds Biggest Beer Run'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'A massive campaign for Beer, Wine and Spirits, it consisted of 6 videos shot in different locations around the world, featuring exotic beers only found in each location, native articles written about each beer and a content hub/microsite to be updated weekly as the campaign progressed.\n'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Agency:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Pedestrian.TV, M&C Saatchi.'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Skills:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Storyboard illustration, Web Design, Branding, Front-end Web Development.'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Role:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Storyboard illustration was required for the initial campaign pitch. This consisted of 6 frames depicting a loose script to showcase the idea. Upon winning the campaign, a further 6 storyboards were illustrated with around 6-7 frames each, following the script closely.\n\nA live content microsite was then designed, working closely with M&C Saatchi. This microsite was to host the variety of media created in the campaign, as well as ads and links to the BWS website to purchase the exotic beer. The hub was designed and created in Shorthand (CMS), with custom modules as requested by M&C Saatchi and BWS. All graphics for the site were supplied by M&C Saatchi.'
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/biggestBeerRun/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/biggestBeerRun/2.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/biggestBeerRun/3.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/biggestBeerRun/4.gif')
      }
    ]
  },
  bitterology: {
    cover: require('~assets/images/projects/bitterology/cover.jpg'),
    items: [
      {
        type: ItemType.TITLE,
        value: 'Selfish Self Care Festival'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Pedestrian.TV’s recurring self-care event ‘Selfish.’ Sponsored by The House of Angostura, with a multitude of other brands signing on as peripheries for activations and/or promotions at the event. The event hosts a line of speakers based around self-care, cocktail drink stations, activity stations, and giveaways/freebies.\n'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Agency:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Pedestrian.TV'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Skills:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Activation sketches, 3D modelling, Photo compositing, Signage, Print'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Role:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Involved in Selfish Weekend (2019) and Selfish Saturday (2020). Working with the senior designer, project manager, and taking direction from the creative director. Involved in preliminary activation designs, done as illustrative sketches and 3D compositions. After approval from client, the graphical elements were refined and finalised for print. These ranged from menu boards, decals, to activity instructions, to wall and stage patterns.'
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/bitterology/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/bitterology/2.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/bitterology/3.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/bitterology/4.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/bitterology/5.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/bitterology/6.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/bitterology/7.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/bitterology/8.png')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/bitterology/9.png')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/bitterology/10.png')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/bitterology/11.png')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/bitterology/12.png')
      }
    ]
  },
  businessInsider: {
    cover: require('~assets/images/projects/businessInsider/cover.jpg'),
    items: [
      {
        type: ItemType.TITLE,
        value: 'Business Insider Research Vertical'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Sponsored partnership between Business Insider (BI) Australia and the Commonwealth Bank of Australia (CommBank). The partnership included a Business Insider website vertical called ‘/Research.’ This vertical would house BI content related to business research, as well as premium long form articles created for CommBank.\n'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Agency:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Allure Media'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Skills:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Web Design, UX/UI, Digital Advertising, Illustration, Branding'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Role:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Based on branding and development constraints the new /Research vertical needed to have a similar look and feel to the other pages on the BI site. Data analytics and click through data was used to determine the layout of the site, and the placement of the widgets to enhance UX. Custom digital ads were also created to differentiate the vertical from others, as well as a spot to indicate sponsorship. They were designed to be subtle, as to not impair UX, whilst still differentiation the vertical.\n\nFour custom long-form articles were also created. Copy was written by Greg McKenna. The articles were built in Shorthand, a browser based page builder. Header images, title images and custom illustration were also created for the articles. Custom HTML/CSS was used to edit the articles to add suitable branding, and bespoke elements.\n\nDigital ad placements were also created to be run on other pages of the BI website, with the aim to drive traffic to new research articles as they went live. These ads had consistent branding and design. Copy and background imagery was swapped as new articles were released. A treatment was applied to the background images to ensure consistency.'
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/businessInsider/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/businessInsider/2.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/businessInsider/3.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/businessInsider/4.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/businessInsider/5.png')
      }
    ]
  },
  commercial: {
    cover: require('~assets/images/projects/commercial/cover.jpg'),
    items: [
      {
        type: ItemType.TITLE,
        value: 'Commercial Design'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Visualisations of ideas for the sales team to pitch to potential clients. Working very closely with the wider commercial team to ideate and find the ideal way to communicate ideas.\n'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Agency:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Pedestrian.TV, Allure Media'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Skills:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Branding, Image Editing, 3D Modelling, Presentation design'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Role:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Often collaborating with the response team to fulfill media briefs. Tasked with bringing ideas to life in the form of mock ups, as well as adhoc presentation slides to capture the viewers attention. This ranged from activations to digital advertising placements, to web design builds. This required in-depth knowledge of the advertising formats as well as research on the brands being partnered with. Often having to learn and follow strict brand guidelines in quick turnover times to produce designs that would resonate with the potential clients. Certain responses also required the transitioning and/or functioning of the ad to be animated in a video mock.'
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/commercial/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/commercial/2.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/commercial/3.gif')
      }
    ]
  },
  dnWedding: {
    cover: require('~assets/images/projects/dnWedding/cover.jpg'),
    items: [
      {
        type: ItemType.TITLE,
        value: 'D&N Wedding'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Stationery and signage suite for the wedding of Natalie and Daniel. The theme of the wedding was Bohemian, with a colour scheme that consisted of deep burgundies, and washed out greens. The client wanted a design that was moody, but retained some of the classic wedding vibe. An accent navy was used to add an edge, as well as a premium quality to the designs.\n\nThe central element was the D&N monogram that is recurring in each of the pieces. The design thinking behind the overall design theme was to create a moody, modern feel, used by colours and type, which also enhanced the legibility of signage and invitation information. Allusions to the ‘classic wedding’ was achieved through the use of floral illustrations, and classic wedding style layouts.'
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/dnWedding/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/dnWedding/2.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/dnWedding/3.jpg')
      }
    ]
  },
  hp: {
    cover: require('~assets/images/projects/hp/cover.jpg'),
    items: [
      {
        type: ItemType.TITLE,
        value: 'Plastic: The Ocean’s Deadliest Predator'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Longform sponsored article and infographic for a Gizmodo and Business Insider collaboration, sponsored by HP. The article covered a sculpture, called ‘The Beast’, that was built solely from recovered plastic from the ocean.'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Agency:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Allure Media'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Skills:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Infographic Design, Web Design, Image Compositing, HTML/CSS'
      },
      {
        type: ItemType.SUBHEADING,
        value: 'Role:'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'The brief required an infographic to be created to be included in the long-form article build and for social media posts. Both designs required HP branded typography and colours. The article design utilised full width, eye-catching, edited imagery to highlight ‘The Beast’, and the effects of plastic in the ocean. Effective image transitions add an immersive feel and further highlight the point. Copy and stock imagery assets were supplied by the Gizmodo commercial content editor.'
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/hp/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/hp/2.png')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/hp/3.jpg')
      }
    ]
  },
  melanoma: {
    cover: require('~assets/images/projects/melanoma/cover.jpg'),
    items: [
      {
        type: ItemType.TITLE,
        value: '#CallTimeOnMelanoma Box Design'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Pattern, and press-ready finished art for a gift box to be given to contestant winners in a promotion run by Who What Wear. Designed to knifeline and printer’s specifications. Pattern was created from an illustration provided by Who What Wear. It uses Who What Wear branded colours, typography and styling to form sleek quality packaging.'
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/melanoma/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/melanoma/2.jpg')
      }
    ]
  },
  sibc: {
    cover: require('~assets/images/projects/sibc/cover.jpg'),
    items: [
      {
        type: ItemType.TITLE,
        value: 'Style Is Bond Crew'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Logo and illustration for the breakdance crew Style is Bond. The clients wanted designs that were bold and had a vintage appeal to it. They requested a logo with the fist as it represented their farewell signatures.'
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/sibc/sibc-logo.png'),
        widthPercent: 0
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/sibc/sibc-tunnel.jpg')
      },
      {
        type: ItemType.DESCRIPTION,
        value: '\nThe illustration sets a moody, vintage tone, using dull colours for the vines and greenery. This makes the text and roses stand out. The type is bold, and the quote invokes a thought provoking reflection.'
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/sibc/sibc-train.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/sibc/sibc-illo.jpg')
      }
    ]
  },
  slideSpace: {
    cover: require('~assets/images/projects/slideSpace/cover.jpg'),
    items: [
      {
        type: ItemType.TITLE,
        value: 'SlideSpace'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'A personal project. It consists of logo, branding and functional packaging design for microscope slides. The packaging solves the spatial issues on a cluttered laboratory workbench, environmental sustainability issues with current packaging, and adds an innovative slide drying mechanism that reduces the hazards involved with the use of open air slides. Package design and branding is targeted towards scientists and lab managers. Clear and concise, with colour coded blocks representing the type of slide, that make the boxes identifiable from every angle.'
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/slideSpace/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/slideSpace/2.jpg')
      }
    ]
  },
  uvPro: {
    cover: require('~assets/images/projects/uvPro/cover.jpg'),
    items: [
      {
        type: ItemType.TITLE,
        value: 'UV Pro'
      },
      {
        type: ItemType.DESCRIPTION,
        value: 'Business card designs for a small window tinting company. Logo was supplied by the client. The bulk of their business comes from car window tints, as such it was fitting to centre the design on cars. He also wanted his branding to be edgy and cool. The look and feel of the business card was developed around UV Pro’s logo. Darker colours and imagery give an edgy, premium feel. Clean and modern sans serif type was combined with minimalism to maintain the theme. Finally, a spot UV was added to the logo and the car windows, to mimic the tint. This was done to highlight the quality and reiterate the type of work that UV Pro carries out.'
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/uvPro/1.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/uvPro/2.jpg')
      },
      {
        type: ItemType.IMAGE,
        value: require('~assets/images/projects/uvPro/3.jpg')
      }
    ]
  }
}
