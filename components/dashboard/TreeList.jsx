import Tree from './Tree'
import useSWR from 'swr'

const treeData = [
  {
    key: '0',
    label: 'truong1-1',
    icon: 'fa-solid fa-folder',
    title: 'Documents Folder',
    children: [
      {
        key: '0-0',
        label: 'truong1-1-1',
        icon: 'fa-solid fa-folder',
        title: 'Documents Folder',
        children: [
          {
            key: '0-1-1',
            label: 'truong3-1',
            icon: 'fa-solid fa-file',
            title: 'Documents Folder',
          },
          {
            key: '0-1-2',
            label: 'truong3-2',
            icon: 'fa-solid fa-file',
            title: 'Documents Folder',
          },
          {
            key: '0-1-3',
            label: 'truong3-3',
            icon: 'fa-solid fa-file',
            title: 'Documents Folder',
            children: [
              {
                key: '0-1-1',
                label: 'truong4-1',
                icon: 'fa-solid fa-file',
                title: 'Documents Folder',
                children: [
                  {
                    key: '0-1-1',
                    label: 'truong5-1',
                    icon: 'fa-solid fa-file',
                    title: 'Documents Folder',
                  },
                  {
                    key: '0-1-2',
                    label: 'truong5-2',
                    icon: 'fa-solid fa-file',
                    title: 'Documents Folder',
                    children: [
                      {
                        key: '0-1-1',
                        label: 'truong6-1',
                        icon: 'fa-solid fa-file',
                        title: 'Documents Folder',
                      },
                      {
                        key: '0-1-2',
                        label: 'truong6-2',
                        icon: 'fa-solid fa-file',
                        title: 'Documents Folder',
                      },
                      {
                        key: '0-1-3',
                        label: 'truong6-3',
                        icon: 'fa-solid fa-file',
                        title: 'Documents Folder',
                        children: [
                          {
                            key: '0-1-1',
                            label: 'truong7-1',
                            icon: 'fa-solid fa-file',
                            title: 'Documents Folder',
                            children: [
                              {
                                key: '0-1-1',
                                label: 'truong8-1',
                                icon: 'fa-solid fa-file',
                                title: 'Documents Folder',
                                children: [
                                  {
                                    key: '0-1-1',
                                    label: 'truong9-1',
                                    icon: 'fa-solid fa-file',
                                    title: 'Documents Folder',
                                  },
                                  {
                                    key: '0-1-2',
                                    label: 'truong9-2',
                                    icon: 'fa-solid fa-file',
                                    title: 'Documents Folder',
                                  },
                                  {
                                    key: '0-1-3',
                                    label: 'truong9-3',
                                    icon: 'fa-solid fa-file',
                                    title: 'Documents Folder',
                                  },
                                ],
                              },
                              {
                                key: '0-1-2',
                                label: 'truong8-2',
                                icon: 'fa-solid fa-file',
                                title: 'Documents Folder',
                              },
                              {
                                key: '0-1-3',
                                label: 'truong8-3',
                                icon: 'fa-solid fa-file',
                                title: 'Documents Folder',
                              },
                            ],
                          },
                          {
                            key: '0-1-2',
                            label: 'truong7-2',
                            icon: 'fa-solid fa-file',
                            title: 'Documents Folder',
                          },
                          {
                            key: '0-1-3',
                            label: 'truong7-3',
                            icon: 'fa-solid fa-file',
                            title: 'Documents Folder',
                          },
                        ],
                      },
                    ],
                  },
                  {
                    key: '0-1-3',
                    label: 'truong5-3',
                    icon: 'fa-solid fa-file',
                    title: 'Documents Folder',
                  },
                ],
              },
              {
                key: '0-1-2',
                label: 'truong4-2',
                icon: 'fa-solid fa-file',
                title: 'Documents Folder',
              },
              {
                key: '0-1-3',
                label: 'truong4-3',
                icon: 'fa-solid fa-file',
                title: 'Documents Folder',
              },
              {
                key: '0-1-4',
                label: 'truong4-4',
                icon: 'fa-solid fa-file',
                title: 'Documents Folder',
              },
            ],
          },
          {
            key: '0-1-4',
            label: 'truong3-4',
            icon: 'fa-solid fa-file',
            title: 'Documents Folder',
          },
        ],
      },
      {
        key: '0-0',
        label: 'truong1-1-2',
        icon: 'fa-solid fa-folder',
        title: 'Documents Folder',
        children: [
          {
            key: '0-1-1',
            label: 'truong3-1',
            icon: 'fa-solid fa-file',
            title: 'Documents Folder',
          },
          {
            key: '0-1-2',
            label: 'truong3-2',
            icon: 'fa-solid fa-file',
            title: 'Documents Folder',
          },
          {
            key: '0-1-3',
            label: 'truong3-3',
            icon: 'fa-solid fa-file',
            title: 'Documents Folder',
            children: [
              {
                key: '0-1-1',
                label: 'truong4-1',
                icon: 'fa-solid fa-file',
                title: 'Documents Folder',
              },
              {
                key: '0-1-2',
                label: 'truong4-2',
                icon: 'fa-solid fa-file',
                title: 'Documents Folder',
              },
              {
                key: '0-1-3',
                label: 'truong4-3',
                icon: 'fa-solid fa-file',
                title: 'Documents Folder',
              },
              {
                key: '0-1-4',
                label: 'truong4-4',
                icon: 'fa-solid fa-file',
                title: 'Documents Folder',
              },
            ],
          },
          {
            key: '0-1-4',
            label: 'truong3-4',
            icon: 'fa-solid fa-file',
            title: 'Documents Folder',
          },
        ],
      },
    ],
  },
  {
    key: '1',
    label: 'truong1-2',
    icon: 'fa-solid fa-desktop',
    title: 'Desktop Folder',
    children: [
      {
        key: '1-0',
        label: 'truong1-2-1',
        icon: 'fa-solid fa-file',
        title: 'Documents Folder',
      },
      {
        key: '0-0',
        label: 'truong1-2-2',
        icon: 'fa-solid fa-file',
        title: 'Documents Folder',
      },
    ],
  },
  {
    key: '2',
    label: 'truong1-3',
    icon: 'fa-solid fa-download',
    title: 'Downloads Folder',
    children: [],
  },
]

const TreeList = () => {
  const { data, error, mutate } = useSWR('/users/referal', {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
  })

  return (
    <>
      <div className="my-6 flex w-full flex-wrap">
        <div className="max-w-full grow basis-0 text-center">
          <h2 className="text-2xl font-bold">User Referal</h2>
          <div className="mt-8">
            <div className="-mx-4- mt-3 flex flex-wrap justify-center">
              <div className="col-lg-8 rounded-xl bg-gray-700 py-6 text-left text-dark">
                <Tree data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TreeList