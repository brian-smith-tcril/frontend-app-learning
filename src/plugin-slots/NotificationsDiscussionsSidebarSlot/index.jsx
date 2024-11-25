import PropTypes from 'prop-types';

import { PluginSlot } from '@openedx/frontend-plugin-framework';
import { useModel } from '@src/generic/model-store';

import Sidebar from '../../courseware/course/sidebar/Sidebar';
import NewSidebar from '../../courseware/course/new-sidebar/Sidebar';

const NotificationsDiscussionsSidebarSlot = ({ courseId }) => {
  const {
    isNewDiscussionSidebarViewEnabled,
  } = useModel('courseHomeMeta', courseId);

  return (
    <PluginSlot
      id="notifications_discussions_sidebar_slot"
      slotOptions={{
        mergeProps: true,
      }}
    >
      {isNewDiscussionSidebarViewEnabled ? <NewSidebar /> : <Sidebar />}
    </PluginSlot>
  );
};

NotificationsDiscussionsSidebarSlot.propTypes = {
  courseId: PropTypes.string.isRequired,
};

export default NotificationsDiscussionsSidebarSlot;
