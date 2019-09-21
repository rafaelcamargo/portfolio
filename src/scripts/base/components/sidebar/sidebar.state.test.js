import sidebarState from '@scripts/base/components/sidebar/sidebar.state';

describe('Sidebar State', () => {
  beforeEach(() => {
    sidebarState.reset();
  });

  it('should not be visible on initialize', () => {
    expect(sidebarState.store.getState()).toEqual({ visible: false });
  });

  it('should toggle visibility', () => {
    sidebarState.toggle();
    expect(sidebarState.store.getState()).toEqual({ visible: true });
    sidebarState.toggle();
    expect(sidebarState.store.getState()).toEqual({ visible: false });
  });

  it('should be able to reset state', () => {
    sidebarState.toggle();
    expect(sidebarState.store.getState()).toEqual({ visible: true });
    sidebarState.reset();
    expect(sidebarState.store.getState()).toEqual({ visible: false });
  });
});
