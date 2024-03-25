export enum SERVICES {
  USER_ACCOUNT = 'USER_ACCOUNT',
  USER_PROFILE = 'USER_PROFILE',
  NOTIFICATION = 'NOTIFICATION',
  JOBS = 'JOBS',
  SYSTEM = 'SYSTEM',
  REVIEW = 'REVIEW',
  GOAL = 'GOAL',
  COMPENSATION = 'COMPENSATION',
  ONE_ON_ONE = 'ONE_ON_ONE'
}

export enum COMPANIES {
  ONBOARDING = 'ONBOARDING',
  RECRUITMENT = 'RECRUITMENT',
  PERFORMANCE = 'PERFORMANCE'
}

export enum Role {
  SUPER_ADMIN = 'SUPER_ADMIN',
  COMPANY_ADMIN = 'COMPANY_ADMIN',
  MANAGER = 'MANAGER',
  ONBOARDING_COORDINATOR = 'ONBOARDING_COORDINATOR',
  SITE_ADMIN = 'SITE_ADMIN',
  JOB_ADMIN = 'JOB_ADMIN',
  EMPLOYEE = 'EMPLOYEE'
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other'
}

export enum WebhooksTypeEnum {
  EVENT = 'Event',
  DECISION = 'Decision',
  PROOF_ADDRESS = 'Proof Address'
}

export enum VerificationLinkTypeEnum {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  QRCODE = 'QRCODE'
}

export enum VerificationStatusEnum {
  NOT_STARTED = 'Not Started',
  STARTED = 'Started',
  SUBMITTED = 'Submitted',
  EXPIRED = 'Expired',
  ABANDONED = 'Abandoned',
  DECLINED = 'Declined',
  APPROVED = 'Approved',
  UNDER_REVIEW = 'Under Review'
}

export enum VerificationDocumentEnum {
  PASSPORT = 'Passport',
  LICENSE = 'License',
  ADDRESS_PERMIT = 'Address Permit',
  PROOF_ADDRESS = 'Proof Address'
}

export enum VerificationPlatformEnum {
  WEB_REACT_JS = 'Web-React-JS',
  IOS = 'IOS',
  ANDROID = 'Android'
}

export enum FileContentTypes {
  CSV = 'application/vnd.openxmlformats',
  PDF = 'application/pdf',
  JSON = 'application/json'
}

export const SOCKET_ROOM = 'Logger';

export const Pronouns = ['you', 'he', 'she', 'it', 'we', 'they'];

export enum EmployeeStatus {
  INVITED = 'Invited',
  ACTIVE = 'Active',
  DEACTIVATED = 'Deactivated'
}

export enum Ethnicity {
  ASIAN = 'Asian',
  WHITE = 'White',
  BLACK = 'Black',
  IRISH = 'Irish',
  HISPANIC = 'Hispanic',
  AFRICAN = 'African',
  EUROPEAN = 'European',
  Native_American = 'Native American'
}

export enum MaritalStatus {
  SINGLE = 'Single',
  MARRIED = 'Married',
  DIVORCED = 'Divorced',
  WIDOWED = 'Widowed'
}

export enum TimeZone {
  UTC = 'UTC (Coordinated Universal Time)',
  GMT = 'GMT (Greenwich Mean Time)',
  EST = 'EST (Eastern Standard Time)',
  CST = 'CST (Central Standard Time)',
  MST = 'MST (Mountain Standard Time)',
  PST = 'PST (Pacific Standard Time)'
}

export enum EmploymentStatus {
  FULL_TIME = 'Full Time',
  PART_TIME = 'Part Time',
  TEMPORARY = 'Temporary',
  CONTRACT = 'Contract'
}

export enum JobLevel {
  JUNIOR = 'Junior',
  MID = 'Mid',
  SENIOR = 'Senior'
}

export enum CompanySize {
  SMALL = '1-40',
  MEDIUM = '41-75',
  LARGE = '76-250',
  EXTRA_LARGE = '251-1000',
  SUPER_LARGE = '1000+'
}

export enum UserAttributeTypes {
  MULTIPLE = 'Multiple Choice',
  NUMBER = 'Number'
}

export enum UserAttributeVisibility {
  ADMIN = 'Admin Only',
  ADMIN_AND_MANAGER = 'Admin and Manager',
  EVERYONE = 'Everyone'
}

export enum EExportFile {
  CSV = 'CSV',
  XLS = 'XLS'
}

export enum ResourceTypes {
  RELATIONSHIP = 'relationship',
  JOB_TITLE = 'job_title',
  QUESTION = 'question',
  ONE_ON_ONE_CATEGORY = 'one_on_one_category'
}

export enum GoalCycleStatuses {
  ACTIVE = 'Active',
  COMPLETE = 'Complete',
  INACTIVE = 'Inactive',
  DRAFT = 'Draft'
}

export enum FeedbackPrivacyTypes {
  PUBLIC = 'Public',
  PRIVATE = 'Private',
  PRIVATE_AND_MANAGER = 'Private + Manager',
  MANAGER = 'Manager'
}

export enum RatingTypes {
  NULL = null,
  TERRIBLE = 'Terrible',
  BAD = 'Bad',
  OKAY = 'Okay',
  GOOD = 'Good',
  GREAT = 'Great'
}

export enum FeedbackTypes {
  GIVE_FEEDBACK = 'Give Feedback',
  REQUEST_FEEDBACK = 'Request Feedback',
  PRIVATE_NOTE = 'Private Note'
}

export enum FeedbackListingTypes {
  ALL = 'All',
  RECEIVED = 'Received',
  GIVEN = 'Given',
  PENDING = 'Pending'
}

export enum FeedbackStatus {
  PENDING = 'Pending',
  DONE = 'Done',
  DECLINED = 'Declined'
}

export enum UserReviewTypes {
  DOWNWARD_REVIEW = 'downward_review',
  UPWARD_REVIEW = 'upward_review',
  SELF_REVIEW = 'self_review',
  PEER_REVIEW = 'peer_review'
}
export enum SwaggerQueryParamStyle {
  CSV = 'form',
  SPACE = 'spaceDelimited',
  PIPE = 'pipeDelimited'
}

export const SwaggerStyleSeparators: Record<SwaggerQueryParamStyle, string> = {
  [SwaggerQueryParamStyle.CSV]: ',',
  [SwaggerQueryParamStyle.SPACE]: ' ',
  [SwaggerQueryParamStyle.PIPE]: '|'
};

export enum LookupTypes {
  EMPLOYEES = 'employees',
  MANAGERS = 'managers',
  DEPARTMENTS = 'departments',
  GROUPS = 'groups',
  TEMPLATES = 'templates',
  GOAL_CYCLE = 'goal_cycles'
}

export const FilterableFields = [
  'employeeTitle',
  'employeeStatus',
  'managerId',
  'department',
  'location',
  'compensationBandId',
  'compensationCycleId'
];

export const IncludableFields = [
  'profileImage',
  'email',
  'employeeId',
  'employeeTitle',
  'employeeStatus'
];

export enum FeedbackDateRanges {
  LAST_7_DAYS = 'Last 7 days',
  LAST_15_DAYS = 'Last 15 days',
  LAST_30_DAYS = 'Last 30 days'
}

export enum Reactions {
  THUMBS_UP = 'Thumbs Up',
  HEART = 'Heart',
  HAPPY = 'Happy',
  ANGRY = 'Angry',
  SHOCK = 'Shock'
}

export enum Currencies {
  AUD = 'AUD $',
  USD = 'USD $',
  GBP = 'GBP £'
}

export enum PayType {
  SALARY = 'Salary',
  HOURLY = 'Hourly',
  MONTHLY = 'Monthly',
  WEEKLY = 'Weekly',
  BIWEEKLY = 'Bi-Weekly'
}

export enum AnswerTypeEnum {
  ShortText = 'ShortText',
  LongText = 'LongText',
  YesNo = 'YesNo',
  SingleSelect = 'SingleSelect',
  MultiSelect = 'MultiSelect'
}

export enum AuditLogEventList {
  AuthCompanySignup = 'Auth.CompanySignup',
  AuthSignin = 'Auth.Signin',
  AuthForgotPassword = 'Auth.ForgotPassword',
  AuthChangePassword = 'Auth.ChangePassword',
  UserProfileUpdateProfile = 'UserProfile.UpdateProfile',
  UserProfileUpdateProfileImage = 'UserProfile.UpdateProfileImage',
  UserProfileRemoveProfileImage = 'UserProfile.RemoveProfileImage',
  UserProfileUpdateCoverImage = 'UserProfile.UpdateCoverImage',
  UserProfileRemoveCoverImage = 'UserProfile.RemoveCoverImage',
  SuperAdminCreate = 'SuperAdmin.AdminCreateUser',
  SuperAdminUpdateSingleUser = 'SuperAdmin.UpdateSingleUser',
  SuperAdminResetPassword = 'SuperAdmin.ResetPassword',
  SuperAdminUpdateCompanyManagementUser = 'SuperAdmin.UpdateCompanyManagementUser'
}

export enum KeyResultTargetTypesEnum {
  NUMBER = 'Number',
  BINARY = 'Binary',
  CURRENCY = 'Currency',
  PERCENTAGE = 'Percentage'
}

export enum GoalVisibilityTypesEnum {
  PUBLIC = 'Public',
  PRIVATE = 'Private',
  SELECTED_GROUP = 'Selected Group',
  SELECTED_DEPARTMENT = 'Selected Department'
}

export enum GoalTypesEnum {
  INDIVIDUAL = 'Individual',
  COMPANY = 'Company',
  DEPARTMENT = 'Department',
  GROUP = 'Group'
}

export enum GoalStatusEnum {
  NEW = 'New',
  IN_PROGRESS = 'In Progress',
  COMPLETED = 'Completed'
}
export enum ListGoalTypesEnum {
  MY_GOALS = 'My Goals',
  DIRECT_REPORTS = 'Direct Reports',
  DEPARTMENT = 'Department',
  COMPANY = 'Company',
  ALL = 'All'
}
export enum CompensationCycleStage {
  SETUP = 'setup',
  RULES = 'rules',
  PARTICIPANTS = 'participants',
  DATA_CHECK = 'data_check',
  BUDGET = 'budget',
  DISTRIBUTE = 'distribute',
  VERIFY = 'verify'
}

export enum CompensationCycleStatus {
  DRAFT = 'draft',
  Active = 'active',
  ENDED = 'ended'
}

export enum EligibilityOptions {
  ELIGIBLE = 'Eligible',
  INELIGIBLE = 'Ineligible'
}

export enum EventPointType {
  DiscussionPoint = 'discussion_point',
  ActionItem = 'action_item'
}

export enum Week {
  FIRST = 'First',
  SECOND = 'Second',
  THIRD = 'Third',
  FOURTH = 'Fourth',
  LAST = 'Last'
}

export enum WeekDay {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

export enum RecurringType {
  DOES_NOT_REPEAT = 'Does not repeat',
  EVERY_WEEKDAY = 'Every weekday(Mon-Fri)',
  DAILY = 'Daily',
  WEEKLY = 'Weekly',
  MONTHLY = 'Monthly',
  YEARLY = 'Yearly'
}

export enum MeetingLocation {
  Virtual = 'Virtual',
  ON_SITE = 'On Site'
}

export enum MeetingStatus {
  IN_PROGRESS = 'In Progress',
  SCHEDULED = 'Scheduled',
  ENDED = 'Ended'
}

export enum OneOnOneMeetingStatus {
  UPCOMING = 'Upcoming',
  CURRENT = 'Current',
  ENDED = 'Ended'
}

export enum TaskType {
  ONE_ON_ONE_MEETING = 'one_on_one_meeting',
  GIVE_FEEDBACK = 'give_feedback',
  ACTIVE_GOALS = 'active_goals',
  PERFORM_REVIEW = 'perform_review',
  NOMINATE_PEER_REVIEWER = 'nominate_peer_reviewer'
}

export enum GetCompensatedEmployee {
  SINGLE = 'SINGLE',
  ALL = 'ALL'
}
