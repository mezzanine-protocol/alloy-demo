import alloy, { Init } from '@alloyidentity/web-sdk';
import {
  sage,
  slate,
  indigo,
  mauve,
  pink,
  violet,
  yellow,
  sand,
  orange,
  brown,
  tomato,
  gray,
} from '@radix-ui/colors';
import { DocVCallback } from '../types/docv';
import * as config from '../config.json';

let sdkThemeCustomStyle = {
  theme: {
    primaryColor: '#33A37D',
    backgroundColor: sage.sage1,
    textColor: sage.sage12,
    borderRadius: '6px',
    iconColor: sage.sage12,
  },
  componentOverride: {
    HelpBanner: {
      default: {
        backgroundColor: sage.sage3,
        textColor: '#212121',
        border: '0.5px solid rgba(0, 0, 0, 0.1)',
      },
    },
    Header: {
      default: {
        border: '0.5px solid rgba(0, 0, 0, 0.1)',
      },
    },
    PhoneInput: {
      default: {
        backgroundColor: '#f9f9f9',
        border: '0.5px solid rgba(0, 0, 0, 0.1)',
      },
    },
  },
};

const getAlloyInitParams = (
  journeyToken: string,
  alloySdkToken: string,
  journeyApplicationToken?: string
): Init => ({
  key: alloySdkToken,
  journeyApplicationToken,
  journeyToken: journeyToken,
  customStyle: sdkThemeCustomStyle,
  customerSlug: config.customer_slug,
  apiUrl: config.sdk_api_url,
  appUrl: config.sdk_app_url,
});

export const setAlloySDKTheme = (theme: string) => {
  switch (theme) {
    case 'light':
      sdkThemeCustomStyle = {
        theme: {
          primaryColor: '#33A37D',
          backgroundColor: sage.sage1,
          textColor: sage.sage12,
          borderRadius: '6px',
          iconColor: sage.sage12,
        },
        componentOverride: {
          HelpBanner: {
            default: {
              backgroundColor: sage.sage3,
              textColor: '#212121',
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          Header: {
            default: {
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          PhoneInput: {
            default: {
              backgroundColor: '#f9f9f9',
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
        },
      };
      break;

    case 'dark':
      sdkThemeCustomStyle = {
        theme: {
          primaryColor: '#33A37D',
          backgroundColor: sage.sage1,
          textColor: sage.sage12,
          borderRadius: '6px',
          iconColor: sage.sage12,
        },
        componentOverride: {
          HelpBanner: {
            default: {
              backgroundColor: sage.sage3,
              textColor: '#212121',
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          Header: {
            default: {
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          PhoneInput: {
            default: {
              backgroundColor: '#f9f9f9',
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
        },
      };
      break;

    case 'blue':
      sdkThemeCustomStyle = {
        theme: {
          primaryColor: indigo.indigo10,
          backgroundColor: slate.slate1,
          textColor: slate.slate12,
          borderRadius: '6px',
          iconColor: slate.slate12,
        },
        componentOverride: {
          HelpBanner: {
            default: {
              backgroundColor: slate.slate3,
              textColor: '#212121',
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          Header: {
            default: {
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          PhoneInput: {
            default: {
              backgroundColor: slate.slate2,
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
        },
      };
      break;

    case 'pink':
      sdkThemeCustomStyle = {
        theme: {
          primaryColor: pink.pink10,
          backgroundColor: mauve.mauve1,
          textColor: mauve.mauve12,
          borderRadius: '6px',
          iconColor: mauve.mauve12,
        },
        componentOverride: {
          HelpBanner: {
            default: {
              backgroundColor: mauve.mauve3,
              textColor: '#212121',
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          Header: {
            default: {
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          PhoneInput: {
            default: {
              backgroundColor: mauve.mauve2,
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
        },
      };
      break;

    case 'purple':
      sdkThemeCustomStyle = {
        theme: {
          primaryColor: violet.violet10,
          backgroundColor: mauve.mauve1,
          textColor: mauve.mauve12,
          borderRadius: '6px',
          iconColor: mauve.mauve12,
        },
        componentOverride: {
          HelpBanner: {
            default: {
              backgroundColor: mauve.mauve3,
              textColor: '#212121',
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          Header: {
            default: {
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          PhoneInput: {
            default: {
              backgroundColor: mauve.mauve2,
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
        },
      };
      break;
    case 'yellow':
      sdkThemeCustomStyle = {
        theme: {
          primaryColor: yellow.yellow8,
          backgroundColor: sand.sand1,
          textColor: sand.sand12,
          borderRadius: '6px',
          iconColor: sand.sand12,
        },
        componentOverride: {
          HelpBanner: {
            default: {
              backgroundColor: sand.sand3,
              textColor: '#212121',
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          Header: {
            default: {
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          PhoneInput: {
            default: {
              backgroundColor: sand.sand2,
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
        },
      };
      break;
    case 'orange':
      sdkThemeCustomStyle = {
        theme: {
          primaryColor: orange.orange10,
          backgroundColor: sand.sand1,
          textColor: sand.sand12,
          borderRadius: '6px',
          iconColor: sand.sand12,
        },
        componentOverride: {
          HelpBanner: {
            default: {
              backgroundColor: sand.sand3,
              textColor: '#212121',
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          Header: {
            default: {
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          PhoneInput: {
            default: {
              backgroundColor: sand.sand2,
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
        },
      };
      break;

    case 'brown':
      sdkThemeCustomStyle = {
        theme: {
          primaryColor: brown.brown10,
          backgroundColor: sand.sand1,
          textColor: sand.sand12,
          borderRadius: '6px',
          iconColor: sand.sand12,
        },
        componentOverride: {
          HelpBanner: {
            default: {
              backgroundColor: sand.sand3,
              textColor: '#212121',
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          Header: {
            default: {
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          PhoneInput: {
            default: {
              backgroundColor: sand.sand2,
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
        },
      };
      break;
    case 'red':
      sdkThemeCustomStyle = {
        theme: {
          primaryColor: tomato.tomato10,
          backgroundColor: gray.gray1,
          textColor: gray.gray12,
          borderRadius: '6px',
          iconColor: gray.gray12,
        },
        componentOverride: {
          HelpBanner: {
            default: {
              backgroundColor: gray.gray3,
              textColor: '#212121',
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          Header: {
            default: {
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
          PhoneInput: {
            default: {
              backgroundColor: gray.gray2,
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
            },
          },
        },
      };
      break;
  }
};

export function initAlloy({
  journeyToken,
  alloySdkToken,
  journeyApplicationToken,
}: {
  journeyToken: string;
  alloySdkToken: string;
  journeyApplicationToken?: string;
}) {
  return alloy.init(
    getAlloyInitParams(journeyToken, alloySdkToken, journeyApplicationToken)
  );
}

export function closeAlloy() {
  alloy.close();
}

export function openAlloy(
  cb: (data: DocVCallback) => void,
  anchorElement: string
) {
  alloy.open(cb, anchorElement);
}
