import {
  IconDefinition,
  faDesktop,
  faEnvelopeOpen,
  faHandHoldingHeart,
  faLayerGroup,
  faStar,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';

export interface CenterMenuItem {
  label: string;
  icon: IconDefinition;
}
export interface LeftMenuItem {
  label: string;
  icon: IconDefinition;
  active: boolean;
}



  export const LeftMenuItems: LeftMenuItem[] = [
  {
    icon: faEnvelopeOpen,
    active: false,
    label: 'Facilities',
  },
  {
    icon: faDesktop,
    active: false,
    label: 'Finance',
  },
  {
    icon: faHandHoldingHeart,
    active: false,
    label: 'Governance',
  },
  {
    icon: faUserGroup,
    active: true,
    label: 'HR',
  },
  {
    icon:faLayerGroup,
    active: false,
    label: 'IT',
  },
  {
    icon:faLayerGroup,
    active: false,
    label: 'Migrations',
  },
  {
    icon: faLayerGroup,
    active: false,
    label: 'QUALITY',
  },
  {
    icon: faStar,
    active: false,
    label: 'Favorite',
  },
];



export const HRMenuItems: CenterMenuItem[] = [
  {
    icon: faEnvelopeOpen,
    label: 'Employee Management',
  },
  {
    icon: faDesktop,
    label: 'Separation Module',
  },
  {
    icon: faHandHoldingHeart,
    label: 'Training',
  },
  {
    icon: faUserGroup,
    label: 'IJP',
  },
  {
    icon: faLayerGroup,
    label: 'P4P',
  },
  {
    icon: faStar,
    label: 'Your Journey',
  },
  {
    icon: faDesktop,
    label: 'I Resolve',
  },
  {
    icon: faHandHoldingHeart,
    label: 'HR- Employee Letters',
  },
  {
    icon: faUserGroup,
    label: 'Employee Certificates',
  },
  {
    icon: faLayerGroup,
    label: 'Employee Benefits',
  },
  {
    icon: faStar,
    label: 'Leave & Attendance',
  },
  {
    icon: faStar,
    label: 'Personal Information',
  },
  {
    icon: faStar,
    label: 'Question Marks',
  },
  {
    icon: faStar,
    label: 'One People Place',
  },
  {
    icon: faStar,
    label: 'Center Stage',
  },
  {
    icon: faStar,
    label: 'Ascent HR',
  },
];

export const QualityMenuItems: CenterMenuItem[] = [
  {
    icon: faEnvelopeOpen,
    label: 'Assurance and Reporting Tool(ART)',
  },
  {
    icon: faDesktop,
    label: 'CMMI SVC 2.0',
  },
  {
    icon: faDesktop,
    label: 'QA Form Dashboard',
  }
];

export const FacilitiesMenuItems: CenterMenuItem[] = [
  {
    icon: faEnvelopeOpen,
    label: 'Risk Management',
  },
  {
    icon: faDesktop,
    label: 'eTMS',
  },
  {
    icon: faDesktop,
    label: 'Visitor Permit',
  }
];

export const FinanceMenuItems: CenterMenuItem[] = [
  {
    icon: faEnvelopeOpen,
    label: 'Capacity Management',
  }
];

export const GovernanceMenuItems: CenterMenuItem[] = [
  {
    icon: faEnvelopeOpen,
    label: 'MADAD Advisory Support',
  },
  {
    icon: faDesktop,
    label: 'Vacination Tracker',
  },
  {
    icon: faDesktop,
    label: 'Record Management System',
  },
  {
    icon: faDesktop,
    label: 'Empower',
  }
];

export const ITMenuItems: CenterMenuItem[] = [
  {
    icon: faEnvelopeOpen,
    label: 'Team Enablement Tracking',
  },
  {
    icon: faDesktop,
    label: 'Surveys',
  },
  {
    icon: faDesktop,
    label: 'IT Security Group',
  }
];
export const MigrationMenuItems: CenterMenuItem[] = [
  {
    icon: faEnvelopeOpen,
    label: 'EDS',
  }
];

export const P4PMenuItems: CenterMenuItem[] = [
  {
    icon: faEnvelopeOpen,
    label: 'View P4P Paid Details',
  },
  {
    icon: faEnvelopeOpen,
    label: 'P4P Query Resolution',
  },
  {
    icon: faEnvelopeOpen,
    label: 'Applicable P4P Scorecard',
  },
  {
    icon: faEnvelopeOpen,
    label: 'Employee rating',
  }
];