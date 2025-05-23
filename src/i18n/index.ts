import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        map: 'Crop Map',
        weather: 'Weather',
        marketplace: 'Marketplace',
        dashboard: 'Dashboard',
        mspRates: 'MSP Rates',
        schemes: 'Schemes'
      },
      home: {
        welcome: 'Welcome to FarmAssist',
        subtitle: 'Your AI-powered farming companion for smarter agriculture',
        getStarted: 'Get Started',
        viewDashboard: 'View Dashboard',
        startNow: 'Start Now',
        features: {
          map: 'Get AI-powered crop recommendations based on your location',
          weather: 'Real-time weather updates and alerts',
          marketplace: 'Buy and sell agricultural products',
          dashboard: 'Track your farming insights and analytics'
        },
        stats: {
          farmers: 'Active Farmers',
          accuracy: 'Accuracy Rate',
          support: 'Support Available'
        },
        cta: {
          title: 'Ready to Transform Your Farming?',
          subtitle: 'Join thousands of farmers who are already using FarmAssist to improve their yields.'
        }
      },
      marketplace: {
        title: 'Agricultural Marketplace',
        addListing: 'Add Listing',
        search: 'Search products...',
        categories: {
          all: 'All Categories',
          seeds: 'Seeds & Plants',
          fertilizers: 'Fertilizers',
          equipment: 'Equipment',
          pesticides: 'Pesticides',
          tools: 'Tools & Accessories'
        },
        sort: {
          topRated: 'Top Rated',
          priceLowHigh: 'Price: Low to High',
          priceHighLow: 'Price: High to Low'
        },
        product: {
          available: 'available',
          reviews: 'reviews'
        },
        modal: {
          title: 'Add New Listing',
          productName: 'Product Name',
          category: 'Category',
          price: 'Price (₹)',
          description: 'Description',
          stock: 'Stock Quantity',
          cancel: 'Cancel',
          add: 'Add Listing'
        }
      },
      dashboard: {
        stats: {
          yield: {
            title: 'Total Yield',
            unit: 'tons',
            change: 'from last month'
          },
          rainfall: {
            title: 'Rainfall',
            unit: 'mm',
            change: 'from last week'
          },
          revenue: {
            title: 'Revenue',
            change: 'from last month'
          },
          tasks: {
            title: 'Tasks',
            pending: 'pending',
            completed: 'completed'
          }
        },
        charts: {
          yield: {
            title: 'Crop Yield Trends',
            actual: 'Actual',
            target: 'Target'
          }
        },
        notifications: {
          title: 'Recent Notifications',
          priority: {
            high: 'HIGH',
            medium: 'MEDIUM',
            low: 'LOW'
          }
        },
        tasks: {
          title: 'Farming Tasks',
          filter: {
            all: 'All Tasks',
            pending: 'Pending',
            completed: 'Completed'
          },
          addNew: 'Add Task',
          modal: {
            new: 'New Task',
            edit: 'Edit Task',
            title: 'Title',
            cancel: 'Cancel',
            create: 'Create Task',
            update: 'Update Task'
          }
        },
        insights: {
          insufficientData: 'Insufficient data for meaningful insights. Please add more crop data.',
          yieldTrends: {
            declining: 'Yield showing declining trend of {{value}}% over the last 3 months. Consider reviewing farming practices.',
            positive: 'Strong positive yield trend of {{value}}%. Current practices are showing good results.'
          },
          rainfallEfficiency: {
            low: 'Low rainfall utilization efficiency detected. Consider improving drainage or water management systems.',
            good: 'Good rainfall utilization efficiency. Current water management practices are effective.',
            moderate: 'Moderate rainfall utilization efficiency. Minor improvements to water management may be beneficial.'
          },
          seasonalPerformance: {
            stable: 'Seasonal performance is stable compared to previous {{season}} (±{{value}}%).',
            changed: '{{season}} performance is {{direction}} {{value}}% compared to previous season.'
          },
          targetAchievement: {
            excellent: 'Excellent target achievement rate of {{value}}%. Keep maintaining current practices.',
            good: 'Good target achievement rate of {{value}}%. Minor optimizations could help reach targets.',
            needsImprovement: 'Target achievement rate of {{value}}% indicates room for improvement. Consider reviewing production strategies.'
          },
          temperatureImpact: {
            none: 'No significant impact of temperature on yield detected.',
            positive: 'Higher temperatures are correlating with better yields. Consider heat-tolerant crop varieties.',
            negative: 'Lower temperatures are correlating with better yields. Consider cold-weather crops or protection measures.'
          },
          weatherAlerts: {
            rain: 'Ensure proper drainage systems are working and protect crops from potential water damage',
            wind: 'Secure any loose farming equipment and protect vulnerable crops from wind damage',
            heat: 'Increase irrigation frequency and consider providing shade for sensitive crops',
            frost: 'Protect crops from frost damage using appropriate frost protection methods',
            default: 'Monitor conditions closely and take protective measures as needed'
          },
          forecast: {
            rain: 'Rain expected in next 24 hours: Plan field operations accordingly',
            tempChange: 'Significant temperature variation expected: Monitor crop stress levels'
          }
        }
      },
      weather: {
        current: {
          title: 'Current Weather',
          temperature: 'Temperature',
          humidity: 'Humidity',
          windSpeed: 'Wind Speed',
          uvIndex: 'UV Index',
          feelsLike: 'Feels like',
          visibility: 'Visibility',
          pressure: 'Pressure'
        },
        forecast: {
          hourly: 'Hourly Forecast',
          daily: '5-Day Forecast',
          temp: 'Temp',
          precip: 'Precip',
          wind: 'Wind'
        },
        alerts: {
          title: 'Weather Alerts',
          valid: 'Valid',
          recommendations: 'Recommendations'
        },
        farming: {
          title: 'Farming Advisories',
          validUntil: 'Valid until'
        }
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: 'होम',
        map: 'फसल मानचित्र',
        weather: 'मौसम',
        marketplace: 'बाज़ार',
        dashboard: 'डैशबोर्ड',
        mspRates: 'एमएसपी दरें',
        schemes: 'स्कीम्स'
      },
      home: {
        welcome: 'फार्मअसिस्ट में आपका स्वागत है',
        subtitle: 'स्मार्ट कृषि के लिए आपका AI-संचालित कृषि सहायक',
        getStarted: 'शुरू करें',
        viewDashboard: 'डैशबोर्ड देखें',
        startNow: 'अभी शुरू करें',
        features: {
          map: 'आपके स्थान के आधार पर AI-संचालित फसल सिफारिशें प्राप्त करें',
          weather: 'वास्तविक समय मौसम अपडेट और अलर्ट',
          marketplace: 'कृषि उत्पादों को खरीदें और बेचें',
          dashboard: 'अपनी कृषि अंतर्दृष्टि और विश्लेषण को ट्रैक करें'
        },
        stats: {
          farmers: 'सक्रिय किसान',
          accuracy: 'सटीकता दर',
          support: 'सहायता उपलब्ध'
        },
        cta: {
          title: 'अपनी खेती को बदलने के लिए तैयार हैं?',
          subtitle: 'हजारों किसानों से जुड़ें जो पहले से ही अपनी उपज में सुधार के लिए फार्मअसिस्ट का उपयोग कर रहे हैं।'
        }
      },
      marketplace: {
        title: 'कृषि बाज़ार',
        addListing: 'लिस्टिंग जोड़ें',
        search: 'उत्पाद खोजें...',
        categories: {
          all: 'सभी श्रेणियां',
          seeds: 'बीज और पौधे',
          fertilizers: 'उर्वरक',
          equipment: 'उपकरण',
          pesticides: 'कीटनाशक',
          tools: 'औजार और सहायक उपकरण'
        },
        sort: {
          topRated: 'शीर्ष रेटेड',
          priceLowHigh: 'मूल्य: कम से अधिक',
          priceHighLow: 'मूल्य: अधिक से कम'
        },
        product: {
          available: 'उपलब्ध',
          reviews: 'समीक्षाएं'
        },
        modal: {
          title: 'नई लिस्टिंग जोड़ें',
          productName: 'उत्पाद का नाम',
          category: 'श्रेणी',
          price: 'मूल्य (₹)',
          description: 'विवरण',
          stock: 'स्टॉक मात्रा',
          cancel: 'रद्द करें',
          add: 'लिस्टिंग जोड़ें'
        }
      },
      dashboard: {
        stats: {
          yield: {
            title: 'कुल उपज',
            unit: 'टन',
            change: 'पिछले महीने से'
          },
          rainfall: {
            title: 'वर्षा',
            unit: 'मिमी',
            change: 'पिछले सप्ताह से'
          },
          revenue: {
            title: 'राजस्व',
            change: 'पिछले महीने से'
          },
          tasks: {
            title: 'कार्य',
            pending: 'लंबित',
            completed: 'पूर्ण'
          }
        },
        charts: {
          yield: {
            title: 'फसल उपज रुझान',
            actual: 'वास्तविक',
            target: 'लक्ष्य'
          }
        },
        notifications: {
          title: 'हाल की सूचनाएं',
          priority: {
            high: 'उच्च',
            medium: 'मध्यम',
            low: 'निम्न'
          }
        },
        tasks: {
          title: 'कृषि कार्य',
          filter: {
            all: 'सभी कार्य',
            pending: 'लंबित',
            completed: 'पूर्ण'
          },
          addNew: 'कार्य जोड़ें',
          modal: {
            new: 'नया कार्य',
            edit: 'कार्य संपादित करें',
            title: 'शीर्षक',
            cancel: 'रद्द करें',
            create: 'कार्य बनाएं',
            update: 'कार्य अपडेट करें'
          }
        },
        insights: {
          insufficientData: 'सार्थक अंतर्दृष्टि के लिए अपर्याप्त डेटा। कृपया अधिक फसल डेटा जोड़ें।',
          yieldTrends: {
            declining: 'पिछले 3 महीनों में {{value}}% की गिरावट का रुझान। कृषि प्रथाओं की समीक्षा करें।',
            positive: '{{value}}% का मजबूत सकारात्मक उपज रुझान। वर्तमान प्रथाएं अच्छे परिणाम दिखा रही हैं।'
          },
          rainfallEfficiency: {
            low: 'कम वर्षा उपयोग दक्षता। जल निकासी या जल प्रबंधन प्रणालियों में सुधार पर विचार करें।',
            good: 'अच्छी वर्षा उपयोग दक्षता। वर्तमान जल प्रबंधन प्रथाएं प्रभावी हैं।',
            moderate: 'मध्यम वर्षा उपयोग दक्षता। जल प्रबंधन में मामूली सुधार लाभदायक हो सकते हैं।'
          },
          seasonalPerformance: {
            stable: 'पिछले {{season}} की तुलना में मौसमी प्रदर्शन स्थिर है (±{{value}}%)।',
            changed: '{{season}} का प्रदर्शन पिछले मौसम की तुलना में {{direction}} {{value}}% है।'
          },
          targetAchievement: {
            excellent: '{{value}}% की उत्कृष्ट लक्ष्य प्राप्ति दर। वर्तमान प्रथाओं को बनाए रखें।',
            good: '{{value}}% की अच्छी लक्ष्य प्राप्ति दर। लक्ष्यों तक पहुंचने के लिए मामूली अनुकूलन मदद कर सकते हैं।',
            needsImprovement: '{{value}}% की लक्ष्य प्राप्ति दर सुधार की गुंजाइश दर्शाती है। उत्पादन रणनीतियों की समीक्षा करें।'
          },
          temperatureImpact: {
            none: 'उपज पर तापमान का कोई महत्वपूर्ण प्रभाव नहीं पाया गया।',
            positive: 'उच्च तापमान बेहतर उपज से सहसंबंधित है। गर्मी-सहनशील फसल किस्मों पर विचार करें।',
            negative: 'कम तापमान बेहतर उपज से सहसंबंधित है। ठंडे मौसम की फसलों या सुरक्षा उपायों पर विचार करें।'
          },
          weatherAlerts: {
            rain: 'जल निकासी प्रणालियों को सुचारू रखें और फसलों को संभावित जल क्षति से बचाएं',
            wind: 'खुले कृषि उपकरणों को सुरक्षित करें और कमजोर फसलों को हवा से बचाएं',
            heat: 'सिंचाई की आवृत्ति बढ़ाएं और संवेदनशील फसलों के लिए छाया प्रदान करें',
            frost: 'पाला क्षति से फसलों की रक्षा के लिए उचित सुरक्षा विधियों का उपयोग करें',
            default: 'स्थितियों की बारीकी से निगरानी करें और आवश्यक सुरक्षात्मक उपाय करें'
          },
          forecast: {
            rain: 'अगले 24 घंटों में वर्षा की संभावना: खेत के कार्यों की योजना तदनुसार बनाएं',
            tempChange: 'महत्वपूर्ण तापमान परिवर्तन की संभावना: फसल तनाव स्तरों की निगरानी करें'
          }
        }
      },
      weather: {
        current: {
          title: 'वर्तमान मौसम',
          temperature: 'तापमान',
          humidity: 'आर्द्रता',
          windSpeed: 'हवा की गति',
          uvIndex: 'UV सूचकांक',
          feelsLike: 'महसूस होता है',
          visibility: 'दृश्यता',
          pressure: 'दबाव'
        },
        forecast: {
          hourly: 'घंटेवार पूर्वानुमान',
          daily: '5-दिन का पूर्वानुमान',
          temp: 'तापमान',
          precip: 'वर्षा',
          wind: 'हवा'
        },
        alerts: {
          title: 'मौसम चेतावनियां',
          valid: 'मान्य',
          recommendations: 'सिफारिशें'
        },
        farming: {
          title: 'कृषि सलाह',
          validUntil: 'तक मान्य'
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;