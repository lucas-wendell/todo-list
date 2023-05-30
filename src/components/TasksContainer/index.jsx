import React, { useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Container } from "./styles";
import { CommandBar } from "../CommandBar";

import { Task } from "../Task";
import { TasksContext } from "../../contexts/taskContext";

export const TasksContainer = () => {
	const { tasks, reorderTasks } = useContext(TasksContext);

	const handleOnDragEnd = (result) => {
		if (!result.destination) return;
		const newTasks = [...tasks];
		const [reorderedItem] = newTasks.splice(result.source.index, 1);

		newTasks.splice(result.destination.index, 0, reorderedItem);
		reorderTasks(newTasks);
	};

	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Droppable droppableId="tasks">
				{(provided) => (
					<Container {...provided.droppableProps} ref={provided.innerRef}>
						{tasks.map((task, index) => (
							<Draggable
								key={`${task.id}-key`}
								draggableId={task.id}
								index={index}
							>
								{(provided) => (
									<div
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										ref={provided.innerRef}
									>
										<Task
											title={task.title}
											isCompleted={task.isCompleted}
											id={task.id}
										/>
									</div>
								)}
							</Draggable>
						))}
						{provided.placeholder}
						<CommandBar />
					</Container>
				)}
			</Droppable>
		</DragDropContext>
	);
};
